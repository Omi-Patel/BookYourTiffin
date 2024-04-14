import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card } from "flowbite-react";
import { NavLink, useNavigate } from "react-router-dom";
import { Image } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { toast } from "react-toastify";

const Profile = () => {
  const [user, setUser] = useState([]);

  const navigate = useNavigate();

  const { id } = useParams();

  const getUser = async () => {
    try {
      const oneUser = await fetch(
        import.meta.env.VITE_MAIN_URL + `/auth/getuser/${id}`
      );

      // response
      const singleUser = await oneUser.json();

      if (singleUser) {
        setUser(singleUser);
      }

      //   console.log(user);

      // end
    } catch (error) {
      console.log(error);
    }
  };

  // logout handle
  const logoutHandle = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userId");
    toast.info("User Loggedout Successfully..!");
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getUser();
  }, []);

  return (
    <div className="h-screen">
      {/* user card */}
      <Card className="max-w-sm border-2 border-purple-700 m-8 mx-auto">
        <div className="flex flex-col items-center pb-10">
          <Image
            alt="Bonnie image"
            height="96"
            src="https://i.pravatar.cc/150?u=a04258114e29026708c"
            width="96"
            className="mb-3 rounded-full shadow-lg"
          />
          <h1 className="mb-1 text-2xl font-medium text-black tracking-wide">
            {user.name}
          </h1>
          <span className="text-lg text-gray-800 font-medium tracking-wide ">
            {user.email}
          </span>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <Button
              className="mx-4 font-bold tracking-wider"
              color="primary"
              variant="bordered"
            >
              <NavLink to={"/contact"}>Message</NavLink>
            </Button>

            <Button
              onClick={logoutHandle}
              variant="flat"
              className="mx-4 font-bold tracking-wider"
              color="danger"
            >
              Logout !
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
