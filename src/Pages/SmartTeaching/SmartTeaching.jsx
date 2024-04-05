import React from "react";
import SmartHeading from "../../Components/SmartHeading/SmartHeading";
import "./SmartTeaching.css";
import AsideSmart from "../../Components/AsideSmart/AsideSmart";
import ImgSrc from "../../assests/asideImg.png";
import MiddleSmartTeaching from "../../Components/MiddleSmartTeaching/MiddleSmartTeaching";
import Img from "../../assests/smartteaching.png";
import SidebarLinks from "../../Components/SidebarLinks/SidebarLinks";
import { expertTeacherLinks } from "../../data";
import { useTranslation } from "react-i18next";
function SmartTeaching() {
  const { t } = useTranslation();
  return (
    <div className="">
      <SmartHeading
        Img={Img}
        heading={t("smartTeaching")}
        subheading={t("ASFTE")}
        className="main-img"
      />
      <section className="container ass4 p-3 p-md-5">
        <div className="row ">
          <div className="col-lg-12 px-3">
            <MiddleSmartTeaching />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SmartTeaching;
// <div className="col-lg-3 px-3">
//   <SidebarLinks links={expertTeacherLinks} />
// </div>;