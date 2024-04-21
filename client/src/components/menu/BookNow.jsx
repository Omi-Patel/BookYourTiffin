import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { Button, ButtonGroup } from "@nextui-org/react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";

import { toast } from "react-toastify";
import axios from "axios";

const BookNow = () => {
  let [count, setCount] = useState(1);
  const [singleMenu, setSingleMenu] = useState({});
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const getMenuInfo = async () => {
    try {
      const menuInfo = await fetch(
        import.meta.env.VITE_MAIN_URL + `/api/getmenu/${id}`
      );

      // response
      const res = await menuInfo.json();
      console.log(res);

      if (res) {
        setSingleMenu(res);
      }

      // end
    } catch (error) {
      console.log(error);
    }
  };

  // Open Razorpay
  const handleOpenRazorpay = async (data) => {
    const key = await axios.get(import.meta.env.VITE_MAIN_URL + `/api/getkey`);
    // console.log(key.data.key, "KEY");

    const options = {
      key: key.data.key, // Enter the Key ID generated from the Dashboard
      amount: data.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "BookYourMeal",
      description: "BookYourMeal-Online",
      image: "https://avatars.githubusercontent.com/u/122214228?v=4",
      order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the previous step
      // callback_url: import.meta.env.VITE_MAIN_URL + "/api/paymentvarification",
      handler: function (response) {
        // console.log(response, "Varification");
        axios
          .post(import.meta.env.VITE_MAIN_URL + `/api/paymentvarification`, {
            response: response,
          })
          .then((res) => {
            console.log(res, "Order Varified");
            console.log("ORDER SAVED TO DB");
            makeOrder(count);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      prefill: {
        name: "OM PATEL",
        email: "ompate@example.com",
        contact: "7777777777",
      },
      notes: {
        address: "Book Your Meal.PVT-Ltd",
      },
      theme: {
        color: "#3321cd",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Checkout Handler
  const checkoutHandler = async (amount) => {
    if (!location) {
      return toast.error("Please Give Your Location..!");
    }
    console.log(amount);
    const _data = { amount: amount };
    axios
      .post(import.meta.env.VITE_MAIN_URL + `/api/checkout`, _data)
      .then((res) => {
        console.log(res.data, "Order Data");
        handleOpenRazorpay(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log(order, "ORDER");

    //
  };

  // checkoutHandler(count * singleMenu.price) -> onClick()

  // Send Order to DB
  const makeOrder = async (count) => {
    try {
      const orderedBy = localStorage.getItem("userId");
      const selectedMenu = id;
      // console.log(count);

      if (!location || !orderedBy || !selectedMenu) {
        return toast.error("All Fields Are Required..!");
      }

      const response = await fetch(
        import.meta.env.VITE_MAIN_URL + `/api/order`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            orderedBy,
            selectedMenu,
            location,
            totalBox: count,
          }),
        }
      );

      // order response
      const orderRes = await response.json();
      console.log(orderRes);

      // condition
      if (orderRes) {
        toast.success(orderRes.success);
        setLocation("");
        setCount(1);
        navigate("/paymentsuccess");
      } else {
        toast.error(orderRes.error);
      }

      // end
    } catch (error) {
      console.log(error);
    }
  };

  const IncreaseCount = () => {
    setCount(count + 1);
  };

  const DecreaseCount = () => {
    if (count <= 1) {
      return alert("Not Applicable..!");
    }
    setCount(count - 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getMenuInfo();
  }, []);

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-4 py-16 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-xl"
              src={singleMenu.image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                BRAND NAME
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {singleMenu.dishName}
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div>
                <p className="m-1 text-xl tracking-wider font-bold text-black">
                  Inside The Box.
                </p>
                <p className="leading-relaxed tracking-wide font-medium m-1">
                  {singleMenu.item1}
                </p>

                <p className="leading-relaxed tracking-wide font-medium m-1">
                  {singleMenu.item2}
                </p>

                {/* Today's Special   */}
                <p className="leading-relaxed  ">
                  {singleMenu.special && (
                    <p className="leading-relaxed text-md text-black font-medium">
                      <span className=""># Today's Special : </span>
                      <br />
                      <span className="text-gray-700 px-4">
                        {singleMenu.special}
                      </span>
                    </p>
                  )}
                </p>
              </div>

              {/* Counter  */}

              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-400 mb-5">
                {/* <div>
                  <ButtonGroup className="">
                    <Button
                      onClick={() => DecreaseCount()}
                      className="text-4xl pb-2 font-medium"
                    >
                      -
                    </Button>
                    <Button className="text-[16px] font-bold">{count}</Button>
                    <Button
                      onClick={() => IncreaseCount()}
                      className="text-2xl pb-1 font-bold"
                    >
                      +
                    </Button>
                  </ButtonGroup>
                </div> */}
              </div>
              <div className="flex ">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Rs. {count * singleMenu.price}.00
                </span>

                {/* Modal  */}

                <Button
                  className="flex ml-auto font-medium tracking-wider"
                  onPress={onOpen}
                  color="primary"
                >
                  Make Order!
                </Button>
                <Modal
                  isOpen={isOpen}
                  onOpenChange={onOpenChange}
                  placement="top-center"
                  backdrop="blur"
                  className=""
                >
                  <ModalContent className="">
                    {(onClose) => (
                      <>
                        <ModalHeader className="flex flex-col gap-1">
                          Your Details!
                        </ModalHeader>
                        <ModalBody>
                          <input
                            className="p-2 px-4 border-2 rounded-xl"
                            // label="Location"
                            placeholder="Enter your Location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                          />
                          {/* <Input
                            // endContent={
                            //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            // }
                            label="QTY."
                            placeholder="Enter Total Tiffin"
                            type="number"
                            variant="bordered"
                            value={1}
                          /> */}

                          {/* Counter  */}
                          <div>
                            <h3 className="m-1">QTY.</h3>
                            <ButtonGroup className="">
                              <Button
                                onClick={() => DecreaseCount()}
                                className="text-4xl pb-2 font-medium"
                              >
                                -
                              </Button>
                              <Button className="text-[16px] font-bold">
                                {count}
                              </Button>
                              <Button
                                onClick={() => IncreaseCount()}
                                className="text-2xl pb-1 font-bold"
                              >
                                +
                              </Button>
                            </ButtonGroup>
                          </div>

                          <div className="flex py-2 px-1 justify-between">
                            <Checkbox
                              classNames={{
                                label: "text-small",
                              }}
                            >
                              Remember me
                            </Checkbox>
                            {/* <Link color="primary" href="#" size="sm">
                              Forgot password?
                            </Link> */}
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            color="danger"
                            variant="flat"
                            onPress={onClose}
                            className="font-medium tracking-wider"
                          >
                            Cancel !
                          </Button>
                          <Button
                            onClick={() =>
                              checkoutHandler(count * singleMenu.price)
                            }
                            color="primary"
                            // onPress={onClose}
                            className="font-medium tracking-wider"
                          >
                            PAY Now : {count * singleMenu.price}.00
                          </Button>
                        </ModalFooter>
                      </>
                    )}
                  </ModalContent>
                </Modal>

                {/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button> */}
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookNow;
