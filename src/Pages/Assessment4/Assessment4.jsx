import React from "react";

import SidebarLinks from "./../../Components/SidebarLinks/SidebarLinks";
import { expertTeacherLinks } from "../../data";
import Assessment4Details from "../../Components/AssessmentsComponents/AssessmentFour/Assessmet4Details/Assessment4Details";
import Assessment4Sidebar from "../../Components/AssessmentsComponents/AssessmentFour/Assessment4Sidebar/Assessment4Sidebar";
import '../Assessment2/Assessment2.css'
import "./Assessment4.css";
import { useTranslation } from "react-i18next";
const Assessment4 = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  let isRTL = lang == "en" ? "ltr" : "rtl";
  return (
    <div>
      <figure className="main-ass2-img main-img d-flex align-items-center ">
        <figcaption>
          <h1 className="m-0">
            {t("UsingTeacherCompetency")}
            {/* <br />
            {t("AssessmenttoDrive")}
            <br />
            {t("TeacherExcellence")} */}
          </h1>
        </figcaption>
      </figure>
      <section className="ass4 p-3 p-md-5 ">
        <div className="row gy-4 mt-5 ">
          <div className="col-lg-3 px-3">
            <SidebarLinks links={expertTeacherLinks} />
          </div>
          <div className="col-lg-6 px-3">
            <Assessment4Details />
          </div>
          <div className="col-lg-3 px-3">
            <Assessment4Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assessment4;
