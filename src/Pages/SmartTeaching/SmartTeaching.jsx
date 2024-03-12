import React from 'react';
import SmartHeading from '../../Components/SmartHeading/SmartHeading';
import './SmartTeaching.css';
import AsideSmart from '../../Components/AsideSmart/AsideSmart';
import ImgSrc from '../../assests/asideImg.png';
import MiddleSmartTeaching from '../../Components/MiddleSmartTeaching/MiddleSmartTeaching';
import Img from '../../assests/smartteaching.png';
import SidebarLinks from '../../Components/SidebarLinks/SidebarLinks';
import { expertTeacherLinks } from '../../data';
import { useTranslation } from 'react-i18next';
function SmartTeaching() {
    const {t} = useTranslation()
  return (
      <>
          <SmartHeading
              Img={Img}
              heading={t("smartTeaching")}
              subheading={t("ASFTE")}
          />
          <section className="ass4 p-3 p-md-5">
              <div className="row gy-4 main-row">
                  <div className="col-xl-3 px-3">
                      <SidebarLinks links={expertTeacherLinks} />
                  </div>
                  <div className="col-xl-6 px-3">
                      <MiddleSmartTeaching />
                  </div>
                  <div className="col-xl-3 px-3">
                      <AsideSmart >
              <div className="asideLeft">
                  <p>
                      {t("barometerTitle")}
                  </p>
                  <img src={ImgSrc} alt="asideImg" />
              </div>
          </AsideSmart>
                  </div>
              </div>
          </section>
          
          
          
      </>
  );
}

export default SmartTeaching;
