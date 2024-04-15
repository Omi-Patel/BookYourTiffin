import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Loader from "../loader/Loader";

const AllUsers = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAllUsers = async () => {
    const allUsers = await fetch(
      import.meta.env.VITE_MAIN_URL + `/auth/allusers`
    );

    //receiving response
    const usersArr = await allUsers.json();
    // console.log(usersArr);
    setUser(usersArr);
    setLoading(false);
  };

  useEffect(() => {
    getAllUsers();
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
        <h1>ALL AVAILABLE USERS !</h1>
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
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Contact
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
                    {user.length > 0 ? (
                      <>
                        {user.map((item, index) => {
                          return (
                            <tbody key={index} className="bg-slate-200">
                              <tr className=" border-b-2 border-gray-300 text-slate-900 font-medium ">
                                {/* S.No   */}
                                <td className="px-6 py-4">{index + 1}.</td>

                                {/* User Name */}
                                <td className="px-6 py-4">{item.name}</td>

                                {/* Email */}
                                <td className="px-6 py-4 ">{item.email}</td>

                                {/* Contact */}
                                <td className="px-6 py-4 uppercase">
                                  {item.contact}
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

export default AllUsers;
