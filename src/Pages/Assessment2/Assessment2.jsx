import React from "react";
import "./Assessment2.css";
import SidebarLinks from "../../Components/SidebarLinks/SidebarLinks";
import { expertTeacherLinks } from "../../data";
import Assessment2Details from "../../Components/AssessmentsComponents/AssessmentTwo/Assessment2Details/Assessment2Details";
import Assessment2Sidebar from "../../Components/AssessmentsComponents/AssessmentTwo/Assessment2Sidebar/Assessment2Sidebar";
import { useTranslation } from "react-i18next";

const Assessment2 = () => {
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

      <section className="ass2 p-3 p-md-5">
        <div className="row gy-4 ">
          
          <div className="col-lg-3 px-3">
            <SidebarLinks links={expertTeacherLinks} />
          </div>

          <div className="col-lg-6 px-3">
            <Assessment2Details />
          </div>

          <div className="col-lg-3 px-3">
            <Assessment2Sidebar />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assessment2;
