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
    <div className="">
      <figure className=" mainimg  main-img d-flex align-items-center ">
        <figcaption>
          <h1 className="m-0 text-center w-100">
            {parse(t("expertTeacherTitle"))}{" "}
          </h1>
        </figcaption>
      </figure>
      <section className="ass4 pading-top p-3 p-md-5">
        <div className="row gy-4 main-row">
          <div className="col-lg-4 px-3">
            <SidebarLinks links={expertTeacherLinks} />
          </div>
          <div className="col-lg-8 px-3 mt-5">
            <MiddleExpert />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExpertTeacherCer;
