import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import Loader from "../loader/Loader";

const AllMenuForAdmin = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMenu = async () => {
    try {
      const resMenu = await fetch(
        import.meta.env.VITE_MAIN_URL + `/api/getmenu`
      );

      // response
      const allMenu = await resMenu.json();
      // console.log(allMenu);

      if (allMenu) {
        setMenu(allMenu);
        setLoading(false);
      }

      // end
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMenu = async (id) => {
    // try {
    //   const deletedMenu = await fetch(
    //     import.meta.env.VITE_MAIN_URL + `/api/deletemenu/${id}`,
    //     {
    //       method: "DELETE",
    //     }
    //   );

    //   // res
    //   const allMenu = await deletedMenu.json();
    //   // console.log(allMenu);
    //   toast.success("Menu Deleted Successfully..!");
    //   getMenu();
    // } catch (error) {
    //   console.log(error);
    // }

    toast.info("Functionality Disabled For Now..!");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getMenu();
  }, []);

  return (
    <div>
      {/* go back */}
      <div className="bg-yellow-100 w-36 flex items-center justify-center p-2 rounded-full m-4">
        <NavLink to={"/dashboard"}>
          <div className="flex gap-2 items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M9.53 2.47a.75.75 0 0 1 0 1.06L4.81 8.25H15a6.75 6.75 0 0 1 0 13.5h-3a.75.75 0 0 1 0-1.5h3a5.25 5.25 0 1 0 0-10.5H4.81l4.72 4.72a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06l6-6a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span>
              {/* Text  */}
              <h1 className="text-3xl font-medium">Back !</h1>
            </span>
          </div>
        </NavLink>
      </div>

      <div className="text-4xl text-center bg-blue-300 p-4 m-4 rounded-2xl font-medium tracking-wider">
        <h1>Dashboard For Menus !</h1>
      </div>
      <div>
        {/* Table  */}
        <div className="">
          <div className=" container mx-auto px-4 max-w-7xl my-5">
            <div className="relative overflow-x-auto shadow-md sm:rounded-xl bg">
              {/* table  */}
              <table className="w-full border-2 border-black shadow-md text-sm text-left text-gray-900">
                {/* thead  */}
                <thead className="text-lg bg-slate-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Sr.No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Thumbnail
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Dish Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Item-1
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Item-2
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Today's Special
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>

                {/* tbody  */}
                {loading ? (
                  <div className="  p-4 w-full mx-auto">
                    <Loader size={"lg"} />
                  </div>
                ) : (
                  <>
                    {menu.length > 0 ? (
                      <>
                        {menu.map((item, index) => {
                          return (
                            <tbody key={index}>
                              <tr className=" border-b-2 text-slate-900 font-medium bg-slate-200">
                                {/* S.No   */}
                                <td className="px-6 py-4">{index + 1}.</td>

                                {/* Dish Thumbnail  */}
                                <th
                                  scope="row"
                                  className="px-6 py-4 font-medium "
                                >
                                  {/* thumbnail  */}
                                  <img
                                    className="w-16 rounded-lg"
                                    src={item.image}
                                    alt="thumbnail"
                                  />
                                </th>

                                {/* Dish Title  */}
                                <td className="px-6 py-4">{item.dishName}</td>

                                {/* Item-1 */}
                                <td className="px-6 py-4 uppercase">
                                  {item.item1}
                                </td>

                                {/* Item-2 */}
                                <td className="px-6 py-4 uppercase">
                                  {item.item2}
                                </td>

                                {/* Special */}
                                <td className="px-6 py-4 uppercase">
                                  {item.special}
                                </td>

                                {/* Price  */}
                                <td className="px-6 py-4">{item.price}/-</td>

                                {/* Delete Blog  */}
                                <td className="px-6 py-4">
                                  <Button
                                    onClick={() => deleteMenu(item._id)}
                                    color="danger"
                                    variant="shadow"
                                    className=" px-4 py-1 rounded-lg text-white font-bold tracking-wider"
                                  >
                                    Delete
                                  </Button>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </>
                    ) : (
                      <h1 className="text-white">Not Found</h1>
                    )}
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMenuForAdmin;
