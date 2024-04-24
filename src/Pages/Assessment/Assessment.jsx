import React from "react";
import "./Assessment.css";
import Img from "../../assests/assessment1.png";
import AsideSmart from "../../Components/AsideSmart/AsideSmart";
import SmartHeading from "../../Components/SmartHeading/SmartHeading";
import LeftOne from "../../assests/left-pic-1.png";
import LeftFour from "../../assests/left-pic-Four.png";
import LeftTwo from "../../assests/left-pic-two.jpg";
import LeftThree from "../../assests/left-pic-3.jpg";
import MiddleAssessment from "../../Components/MiddleAssessment/MiddleAssessment";
import SidebarLinks from "../../Components/SidebarLinks/SidebarLinks";
import { expertTeacherLinks } from "../../data";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
function Assessment() {
  const { t } = useTranslation();
  return (
    <div>
      <SmartHeading
        Img={Img}
        heading={t("TEAST")}
        subheading={t("TEAST-text")}
      />
      <section className="ass4 ">
        <div className="row gy-4 main-row">
          <div className="col-lg-3 px-3">
            <SidebarLinks links={expertTeacherLinks} />
            
            <AsideSmart width="100% ">
              <div className="assessment__left">
                <h3>{t("TEAST")}</h3>
                <h5>{t("TCA")}</h5>
                <p>{t("TCA-text")}</p>
                <Link className="member-link" to="/TeacherCompetencyAssessment">
                  <img src={LeftOne} alt="left-img" />
                </Link>
                <h5>{t("STCA")}</h5>
                <p>{t("STCA-text")}</p>
                <Link
                  className="member-link"
                  to="/SimplifiedTeachersCompetencyAssessment"
                >
                  <img src={LeftThree} alt="left-three" />
                </Link>
                <h5>{t("CO")}</h5>
                <p>{t("CO-text")}</p>
                <Link
                  className="member-link"
                  to="/ClassroomObservationInstruments"
                >
                  <img src={LeftTwo} alt="left-tow" />
                </Link>
                <h5>{t("SPS")}</h5>
                <p>{t("SPS-text")}</p>
                <Link className="member-link" to="/StudentsRatingtheirTeachers">
                  <img src={LeftFour} alt="last" />
                </Link>
              </div>
            </AsideSmart>
          </div>
          <div className="col-lg-9 px-3">
            <MiddleAssessment />
          </div>

        </div>
      </section>
    </div>
  );
}

export default Assessment;
