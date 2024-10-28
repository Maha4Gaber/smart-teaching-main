/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SidebarLinks from "../../Components/SidebarLinks/SidebarLinks";
import { expertTeacherLinks } from "../../data";
import Assessment3Details from "../../Components/AssessmentsComponents/AssessmentThree/Assessment3Details/Assessment3Details";
import Assessment3Sidebar from "./../../Components/AssessmentsComponents/AssessmentThree/Assessment3Sidebar/Assessment3Sidebar";

import "./Assessment3.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Assessment3 = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  let isRTL = lang === "en" ? "ltr" : "rtl";
  const userData = useSelector((state) => state.userData);
  let navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!userData.user_data) {
      navigate("/login");
      return; // Exit early if user data is not available
    }
    if (
      userData.user_data.membership == null ||
      userData.user_data.membership === "Free"
    ) {
      setShowMessage(true); // Show the message if the membership is free
    }

    if (userData.user_data.role === "user") {
      console.log(userData.user_data.group);
      navigate("/login");
      return; // Exit early if the user role is "user"
    }
  }, [userData, navigate]);

  const handleSubscribe = () => {
    navigate("/membership"); // Navigate to the subscription page
  };

  return (
    <div className="mt-5">
      {showMessage ? (
        <div className="p-3 5 mt-5">
          <div className="alert mt-5 alert-warning p-3 p-md-5">
            {t("notFreeMessage")} {/* Replace with your specific message */}
            <button
              onClick={handleSubscribe}
              className=" w-25 border-0 bg-transparent"
            >
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
        <>
          <figure className="main-ass3-img main-img d-flex align-items-center ">
            <figcaption>
              <h1 className="med-mb">
                {t("ass3h2")}
                <h4>{t("ass3tool")}</h4>
              </h1>
            </figcaption>
          </figure>
          <div className="ass3 p-md-5">
            <div className="row gy-4 ">
              <div className="col-lg-3 px-3 g-3">
                <SidebarLinks links={expertTeacherLinks} />
                <Assessment3Sidebar />
              </div>

              <div className="col-lg-9 px-3">
                <Assessment3Details />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Assessment3;
