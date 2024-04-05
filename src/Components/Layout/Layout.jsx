import React from "react";
import { Outlet } from "react-router-dom";
import { Offline } from "react-detect-offline";
import { FiWifiOff } from "react-icons/fi";
import BackToTopBtn from "./../BackToTopBtn/BackToTopBtn";
import Footer from "../Footer/Footer";
import MainNavbar from "./../Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <MainNavbar />
      <Outlet></Outlet>

      <BackToTopBtn />

      <Footer />

      <Offline>
        <div className="custom-position custom-position2 d-flex justify-content-end">
          <span className="networkStatus alert alert-danger d-flex justify-content-center">
            <div className="mx-2">s</div>
            <div className="mx-1">
              {" "}
              <FiWifiOff className="mb-1" />{" "}
            </div>
          </span>
        </div>
      </Offline>
    </div>
  );
};

export default Layout;
