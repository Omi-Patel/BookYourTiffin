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

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [order, setOrder] = useState([]);

  const getAllUsers = async () => {
    const allUsers = await fetch(`http://localhost:3000/auth/allusers`);

    //receiving response
    const usersArr = await allUsers.json();
    // console.log(usersArr);
    setUser(usersArr);
  };

  const getOrders = async () => {
    try {
      const allOrders = await fetch(`http://localhost:3000/api/getorder`);

      // receiving response
      const orderRes = await allOrders.json();
      console.log(orderRes);

      setOrder(orderRes);
      // end
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

      {/* Order Table  */}
      <div className="m-4">
        <h1 className="bg-slate-500 p-2 m-4 rounded-lg text-white font-bold tracking-widest text-[18px]">
          Today's Orders
        </h1>
        <div>
          <div className="overflow-x-auto">
            <Table hoverable>
              <TableHead>
                <TableHeadCell>ORDERED BY</TableHeadCell>
                <TableHeadCell>DISH NAME</TableHeadCell>
                <TableHeadCell>QTY.</TableHeadCell>
                <TableHeadCell>PRICE</TableHeadCell>
                <TableHeadCell>TOTAL BILL</TableHeadCell>

                <TableHeadCell>CONTACT</TableHeadCell>
                <TableHeadCell>EMAIL</TableHeadCell>
                <TableHeadCell>DATE</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y">
                {order.map((singleOrder, index) => (
                  <TableRow
                    key={index}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                      {singleOrder.orderedBy.name}
                    </TableCell>
                    <TableCell>{singleOrder.selectedMenu.dishName}</TableCell>
                    <TableCell>{singleOrder.totalBox}</TableCell>
                    <TableCell>
                      Rs. {singleOrder.selectedMenu.price}.00
                    </TableCell>
                    <TableCell>
                      Rs.{" "}
                      {singleOrder.selectedMenu.price * singleOrder.totalBox}.00
                    </TableCell>
                    <TableCell>{singleOrder.orderedBy.contact}</TableCell>
                    <TableCell>{singleOrder.orderedBy.email}</TableCell>
                    <TableCell>{dateFormat(singleOrder.createdAt)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
