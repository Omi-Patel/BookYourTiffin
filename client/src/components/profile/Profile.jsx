import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Profile = () => {
  const [user, setUser] = useState([]);

  const { id } = useParams();

  const getUser = async () => {
    try {
      const oneUser = await fetch(`http://localhost:3000/auth/getuser/${id}`);

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

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      <h2>{user.name}</h2>
      <h2>{user.email}</h2>
    </div>
  );
};

export default Profile;
