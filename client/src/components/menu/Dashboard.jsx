import React, { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

import dateFormat, { masks } from "dateformat";
import Loader from "../loader/Loader";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [order, setOrder] = useState([]);
  const [loading, setLoading] = useState(true);
  const [orderText, setOrderText] = useState("");

  const getAllUsers = async () => {
    const allUsers = await fetch(
      import.meta.env.VITE_MAIN_URL + `/auth/allusers`
    );

    //receiving response
    const usersArr = await allUsers.json();
    // console.log(usersArr);
    setUser(usersArr);
  };

  const getOrders = async () => {
    try {
      const allOrders = await fetch(
        import.meta.env.VITE_MAIN_URL + `/api/getorder`
      );

      // receiving response
      const orderRes = await allOrders.json();
      console.log(orderRes);

      setOrder(orderRes);
      setOrderText("ALL ORDERS");
      setLoading(false);

      // end
    } catch (error) {
      console.log(error);
    }
  };

  const getTodayOrder = () => {
    try {
      // console.log(dateFormat(orderRes.createdAt).substring(0, 15));

      const date = new Date();
      // console.log(date.toString().substring(0, 15));

      const filterOrder = order.filter((item) => {
        return (
          dateFormat(item.createdAt).substring(0, 15) ===
          date.toString().substring(0, 15)
        );
      });

      console.log(filterOrder);
      setOrder(filterOrder);
      setOrderText("TODAY'S ORDERS");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllUsers();
    getOrders();
  }, []);

  return (
    <div className="h-full">
      <div className="flex flex-wrap justify-end m-6 p-2 gap-4">
        <Button
          color="warning"
          variant="shadow"
          className="font-bold tracking-wider text-[16px] px-0"
        >
          <NavLink className="flex gap-1  p-2 px-4" to={"/allusers"}>
            Show All Users
          </NavLink>
        </Button>

        <Button
          variant="shadow"
          color="primary"
          className="font-bold tracking-wider text-[16px] px-0"
        >
          <NavLink to={"/allmenu"} className="flex gap-1  p-2 px-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>All Menu !</span>
          </NavLink>
        </Button>

        <Button
          variant="shadow"
          color="success"
          className="font-bold tracking-wider text-[16px] px-0"
        >
          <NavLink to={"/createmenu"} className="flex gap-1  p-2 px-4">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </span>
            <span>Create Menu !</span>
          </NavLink>
        </Button>
      </div>

      <div className="flex flex-wrap  gap-10 justify-center items-center">
        {/* Total Users  */}
        <div className="border-2   flex flex-col gap-2 w-[250px] p-4 bg-slate-300  justify-center items-center rounded-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24"
            >
              <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
            </svg>
          </span>
          <span className="text-xl font-medium tracking-wider">
            Total Users :{" "}
            <span className="text-blue-600 font-bold">0{user.length}</span>
          </span>
        </div>

        {/* Total Orders  */}
        <div className="border-2   flex flex-col gap-2 w-[250px] p-4 bg-slate-300  justify-center items-center rounded-lg">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-24 h-24"
            >
              <path
                fillRule="evenodd"
                d="M1.5 6.375c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v3.026a.75.75 0 0 1-.375.65 2.249 2.249 0 0 0 0 3.898.75.75 0 0 1 .375.65v3.026c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 17.625v-3.026a.75.75 0 0 1 .374-.65 2.249 2.249 0 0 0 0-3.898.75.75 0 0 1-.374-.65V6.375Zm15-1.125a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0v.75a.75.75 0 0 0 1.5 0v-.75Zm-.75 3a.75.75 0 0 1 .75.75v.75a.75.75 0 0 1-1.5 0v-.75a.75.75 0 0 1 .75-.75Zm.75 4.5a.75.75 0 0 0-1.5 0V18a.75.75 0 0 0 1.5 0v-.75ZM6 12a.75.75 0 0 1 .75-.75H12a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 12Zm.75 2.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="text-xl font-medium tracking-wider">
            Total Orders :{" "}
            <span className="text-blue-600 font-bold">0{order.length}</span>
          </span>
        </div>
      </div>

      {/* Order Table  */}
      <div className="m-4">
        <div className="bg-slate-500 flex flex-wrap gap-4 justify-between items-center p-3 m-2 rounded-lg text-white font-bold tracking-widest text-[18px]">
          {/* <span># All Orders</span> */}
          <span>
            <h1 className="p-3 lg:p-0"># {orderText}</h1>
          </span>
          <div className="flex flex-wrap  gap-4">
            <span>
              <Button
                onClick={getOrders}
                variant="faded"
                color="primary"
                className="font-medium "
              >
                Show All Orders
              </Button>
            </span>

            <span>
              <Button
                onClick={getTodayOrder}
                variant="faded"
                color="secondary"
                className="font-medium "
              >
                Show Today's Orders
              </Button>
            </span>
          </div>
        </div>

        <div>
          <div className="overflow-x-auto m-1 rounded-lg border-3">
            <Table hoverable>
              <TableHead>
                <TableHeadCell>ORDERED BY</TableHeadCell>
                <TableHeadCell>DISH NAME</TableHeadCell>
                <TableHeadCell>QTY.</TableHeadCell>
                <TableHeadCell>LOCATION</TableHeadCell>

                <TableHeadCell>PRICE</TableHeadCell>
                <TableHeadCell>TOTAL BILL</TableHeadCell>

                <TableHeadCell>CONTACT</TableHeadCell>
                <TableHeadCell>EMAIL</TableHeadCell>
                <TableHeadCell>DATE</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                {loading ? (
                  <div className="  p-4 w-full mx-auto">
                    <Loader size={"lg"} />
                  </div>
                ) : (
                  <>
                    {order.map((singleOrder, index) => (
                      <TableRow
                        key={index}
                        className="bg-white dark:border-gray-700 dark:bg-gray-800"
                      >
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          {singleOrder.orderedBy.name}
                        </TableCell>
                        <TableCell>
                          {singleOrder.selectedMenu.dishName}
                        </TableCell>
                        <TableCell>{singleOrder.totalBox}</TableCell>
                        <TableCell>{singleOrder.location}</TableCell>

                        <TableCell>
                          Rs. {singleOrder.selectedMenu.price}.00
                        </TableCell>
                        <TableCell>
                          Rs.{" "}
                          {singleOrder.selectedMenu.price *
                            singleOrder.totalBox}
                          .00
                        </TableCell>
                        <TableCell>{singleOrder.orderedBy.contact}</TableCell>
                        <TableCell>{singleOrder.orderedBy.email}</TableCell>
                        <TableCell>
                          {dateFormat(singleOrder.createdAt)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
