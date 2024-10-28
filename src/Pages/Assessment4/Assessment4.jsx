/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SidebarLinks from "./../../Components/SidebarLinks/SidebarLinks";
import { expertTeacherLinks } from "../../data";
import Assessment4Details from "../../Components/AssessmentsComponents/AssessmentFour/Assessmet4Details/Assessment4Details";
import Assessment4Sidebar from "../../Components/AssessmentsComponents/AssessmentFour/Assessment4Sidebar/Assessment4Sidebar";
import "../Assessment2/Assessment2.css";
import "./Assessment4.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Assessment4 = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const isRTL = lang === "en" ? "ltr" : "rtl";

  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!userData) {
      navigate("/login");
      return; // Exit if no user data
    }

    if (userData.role === "user") {
      console.log(userData.group);
      navigate("/login");
      return; // Exit if user role is "user"
    }

    // Assuming you have a function or logic to determine membership status
    const isFreeMembership = checkMembership(userData); // Implement this function based on your logic
    console.log(isFreeMembership);

    if (isFreeMembership) {
      setShowMessage(true); // Show subscription message
    }
  }, [userData, navigate]);

  const checkMembership = (data) => {
    if (
      data.user_data.membership == null ||
      data.user_data.membership === "Free"
    ) {
      return true; // Placeholder, replace with actual logic
    }
    return false;
  };

  const handleSubscribe = () => {
    navigate("/membership"); // Navigate to the subscription page
  };

  return (
    <div className="mt-5">
      {showMessage ? (
        <div className="p-3 5 mt-5">
          <div className="alert mt-5 alert-warning p-3 p-md-5">
            {t("notFreeMessage")} {/* Replace with your specific message */}
            <button onClick={handleSubscribe} className=" w-25 border-0 bg-transparent">
              <div
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
                className="w-100  text-center join cursor-pointer"
              >
               {t("joinUs")}
              </div>
              {/* Button text for subscription */}
            </button>
          </div>
        </div>
      ) : (
        <section className="ass4 p-3 p-md-5 ">
          <div className="row gy-4 mt-5 ">
            <div className="col-lg-3 px-3">
              <SidebarLinks links={expertTeacherLinks} />
              <Assessment4Sidebar />
            </div>
            <div className="col-lg-9 px-3">
              <Assessment4Details />
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Assessment4;
