import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import notifacationimg from "../../assests/Login/notifications.svg";
import axios from "axios";

const Messages = () => {
  const [mesagess, setmesagess] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      try {
          await axios.get("api/v3/messages").then((res) => {
          console.log(res.data);
          setmesagess(res.data)
          });
      } catch (error) {
          console.error("Error fetching data:", error);
      } 
  };
  // if (!localStorage.user_data) navigate("login");
  // else {
    getdata();
  // }
  }, []);
  return (
    <>
      
    </>
  );
};

export default Messages;
