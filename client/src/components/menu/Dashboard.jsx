import React, { useEffect, useState } from "react";
import { Avatar } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState([]);

  const getAllUsers = async () => {
    const allUsers = await fetch(`http://localhost:3000/auth/allusers`);

    //receiving response
    const usersArr = await allUsers.json();
    // console.log(usersArr);
    setUser(usersArr);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="h-screen">
      <div className="flex justify-end m-6 p-2 ">
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

      <div className="border-2 m-4  flex flex-col gap-2 w-[250px] p-4 bg-slate-300 mx-auto justify-center items-center rounded-lg">
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
    </div>
  );
};

export default Dashboard;
