/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import SidebarLinks from "../../Components/SidebarLinks/SidebarLinks";
import { expertTeacherLinks } from "../../data";
import "./Assessment5.css";
import Assessment5Details from "../../Components/AssessmentsComponents/AssessmentFive/Assessment5Details/Assessment5Details";
import Assessment5Sidebar from "../../Components/AssessmentsComponents/AssessmentFive/Assessment5Sidebar/Assessment5Sidebar";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Assessment5 = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const userData = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!userData) {
      navigate("/login");
      return; // Exit if no user data
    }
    const isFreeMembership = checkMembership(userData);
    if (isFreeMembership) {
      setShowMessage(true); // Show subscription message
    }

    if (userData.user_data.role === "user" || userData.user_data.role !== "admin") {
      navigate("/login");
      return; // Exit if user role is "user"
    }

  }, [userData, navigate]);

  const checkMembership = (data) => {
    // Check if the user has a "Free" membership
    return (
      data.user_data &&
      (data.user_data.membership === null || data.user_data.membership === 'Free')
    );
  };

  const handleSubscribe = () => {
    navigate("/membership"); // Navigate to the subscription page
  };

  return (
    <div className="mt-5">
      {showMessage ? (
        <div className="p-3 mt-5">
          <div className="alert mt-5 alert-warning p-3 p-md-5">
            {t("notFreeMessage")} {/* Replace with your specific message */}
            <button onClick={handleSubscribe} className="w-25 border-0 bg-transparent">
              <div
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
                className="w-100 text-center join cursor-pointer"
              >
                {t("joinUs")}
              </div>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <figure className="main-ass5-img main-img d-flex align-items-center">
            <figcaption>
              <h1 className="">
                {t("ass5h1")}
                <h4>{t("ass5h4")}</h4>
              </h1>
            </figcaption>
          </figure>

          <section className="ass5 py-3 py-md-4">
            <div className="row gy-4">
              <div className="col-lg-3 px-3">
                <div className="mb-4">
                  <SidebarLinks links={expertTeacherLinks} />
                </div>
                <div className="mt-">
                  <Assessment5Sidebar />
                </div>
              </div>

              <div className="col-lg-9 px-3">
                <Assessment5Details />
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Assessment5;