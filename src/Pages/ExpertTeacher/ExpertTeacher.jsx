import SidebarLinks from "../../Components/SidebarLinks/SidebarLinks";
import { expertTeacherLinks } from "../../data";
import ExpertTeacherSidebar from "../../Components/ExpertTeacherComponents/ExpertTeacherSidebar/ExpertTeacherSidebar";
import ExpertTeacherDetails from "../../Components/ExpertTeacherComponents/ExpertTeacherDetails/ExpertTeacherDetails";
import parse from "html-react-parser";

import "./ExpertTeacher.css";
import { useTranslation } from "react-i18next";
const ExpertTeacher = () => {
  const { t } = useTranslation();
  return (
    <div>
      <figure className="main-expert-teacher-img  main-img d-flex align-items-center ">
        <figcaption>
          <h1 className="m-0 text-center w-100">
            {parse(t("expertTeacherTitle"))}{" "}
          </h1>
        </figcaption>
      </figure>

      <section className="expert-teacher cont">
        <div className="row gy-4 ">
          <div className="col-lg-3 col-md-3  py-3">
            <SidebarLinks links={expertTeacherLinks} />
            <div className=" py-3 ">
              <ExpertTeacherSidebar />
            </div>
          </div>

          <div className="col-lg-9   col-md-7  py-3">
            <ExpertTeacherDetails />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpertTeacher;
