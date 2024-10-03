import React, { useEffect } from "react";
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
  let isRTL = lang == "en" ? "ltr" : "rtl";
  const userData = useSelector((state) => state.userData);
  let navigate = useNavigate();
  // if (!localStorage.user_data) {navigate('/login')}
  useEffect(() => {
    if (!userData.user_data) {
      navigate("/login");
    }
    // if (localStorage.token & localStorage.token =='null') {navigate('login')}
    if (userData.user_data.role === "user") {
      // if(){

      // }
      console.log(userData.user_data.group);
      navigate("/login");
    }
  }, []);
  return (
    <div>
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

          {/* <div className="col-lg-3 px-3">
                
                
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Assessment3;
