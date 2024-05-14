import React from "react";
import MiddleExpert from "../../Components/MiddleExpert/MiddleExpert";
import SidebarLinks from "../../Components/SidebarLinks/SidebarLinks";
import { expertTeacherLinks } from "../../data";
import "./ExpertTeacherCer.module.css";
import './ExpertTeacherCer.css'
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";
function ExpertTeacherCer() {
  const { t } = useTranslation();
  return (
    <div className=" ">
      {/* <figure className=" mainimg  main-img d-flex align-items-center ">
        <figcaption>
          <h1 className="m-0 text-center w-100">
            {parse(t("expertTeacherTitle"))}{" "}
          </h1>
        </figcaption>
      </figure>
      s;dkfep */}
      <section className="ass4 pading-top mt-5 ">
        <div className="row ">
          <div className="col-lg-3 px-3">
            <SidebarLinks links={expertTeacherLinks} />
          </div>
          <div className="col-lg-9 px-3 ">
            <MiddleExpert />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExpertTeacherCer;
