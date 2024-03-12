import React from 'react';
import './Assessment.css';
import Img from '../../assests/assessment1.png';
import AsideSmart from '../../Components/AsideSmart/AsideSmart';
import SmartHeading from '../../Components/SmartHeading/SmartHeading';
import LeftOne from '../../assests/left-pic-1.png';
import LeftFour from '../../assests/left-pic-Four.png';
import LeftTwo from '../../assests/left-pic-two.jpg';
import LeftThree from '../../assests/left-pic-3.jpg';
import MiddleAssessment from '../../Components/MiddleAssessment/MiddleAssessment';
import SidebarLinks from '../../Components/SidebarLinks/SidebarLinks';
import { expertTeacherLinks } from '../../data';
import { useTranslation } from 'react-i18next';
function Assessment() {
    const {t} = useTranslation()
  return (
      <>
          <SmartHeading
              Img={Img}
              heading={t("TEAST")}
              subheading={t("TEAST-text")}
          />
          <section className="ass4 p-3 p-md-5">
              <div className="row gy-4 main-row">
                  <div className="col-xl-3 px-3">
                      <SidebarLinks links={expertTeacherLinks} />
                  </div>
                  <div className="col-xl-6 px-3">
                      <MiddleAssessment />
                  </div>
                  <div className="col-xl-3 px-3">
                      <AsideSmart width="100%">
                  <div className="assessment__left">
                      <h3>{t("TEAST")}</h3>
                      <h5>{t("TCA")}</h5>
                      <p>{t("TCA-text")}</p>
                      <img src={LeftOne} alt="left-img" />
                      <h5>{t("STCA")}</h5>
                      <p>{t("STCA-text")}</p>
                      <img src={LeftThree} alt="left-three" />
                      <h5>{t("CO")}</h5>
                      <p>{t("CO-text")}</p>
                      <img src={LeftTwo} alt="left-two" />
                      <h5>{t("SPS")}</h5>
                      <p>{t("SPS-text")}</p>
                      <img src={LeftFour} alt="last" />
                  </div>
              </AsideSmart>
                  </div>
              </div>
          </section>

      </>
  );
}

export default Assessment;
