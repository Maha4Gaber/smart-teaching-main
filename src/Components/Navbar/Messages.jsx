import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import notifacationimg from "../../assests/Login/notifications.svg";
import axios from "axios";

const Messages = () => {
  const [mesagess, setmesagess] = useState(null);
  useEffect(() => {
    const getdata = async () => {
      try {
          await axios.get("api/v3/messages").then((res) => {
          console.log(res.data);
          // setmesagess(res.data)
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
      <li className="notifcation">
        <Link
          className="nav-link dropdown-toggle"
          href="/profile"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <span className="notify">2</span>
          <img className="" src={notifacationimg} />
          {/* <img className="" src={} /> */}
        </Link>
        <ul className="dropdown-menu p-0" aria-labelledby="navbarDropdown">
          <li className="m-0">
            <div
              className=" dropdown-item"
            >
              mesagess
            </div>
          </li>
          <li className="m-0">
            <div
              className=" dropdown-item"
              // className={({ isActive }) =>
                // isActive ? " dropdown-item" : "dropdown-item"
              // }
            >
              mesagess
            </div>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Messages;
