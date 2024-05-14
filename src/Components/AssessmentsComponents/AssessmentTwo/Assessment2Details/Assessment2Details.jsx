import React, { useTransition } from "react";
import ImageComp from "../../../ImageComp/ImageComp";

import img1 from "../../../../assests/Assessments/Assessment2/details1.png";
import btn1 from "../../../../assests/Assessments/Assessment2/btn-1.png";
import btn2 from "../../../../assests/Assessments/Assessment2/btn-2.png";
import imgen from '../../../../assests/Assessments/Assessment2/details2.png'
import imgar from '../../../../assests/Assessments/Assessment2/details2ar .jpg'
import { FaCheck } from "react-icons/fa6";

import "./Assessment2Details.css";
import {
  assTwoTeacherDomain,
  teacherCompetencies,
  teacherCompetencies2,
} from "../../../../data";
import Assessment2Table from "../Assessment2Table/Assessment2Table";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Assessment2Details = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  let isRTL = lang == "en" ? "ltr" : "rtl";
  return (
    <div className="ass2-details mar-120">
      <h2 className="mb-4">{t("ass4h2")}</h2>
      <h3 className="px-0 px-lg-5 mb-4">{t("ass2h3")}</h3>
      <div className="text-center m-4 first-img">
        <ImageComp src={img1} alt="Teacher Assessment" />
      </div>
      <p className="special">{t("ass2p1")}</p>
      <p className="special mb-4">{t("ass2p2")}</p>
      <ul className="px-4  mt-3">
        <li className="d-flex mb-3">
          <span className="simple-icon">
            <FaCheck />
          </span>
          <span className="mx-2"></span>
          <span className="desc">{t("ass2li1")}</span>
        </li>

        <li className="d-flex mb-3">
          <span className="simple-icon">
            <FaCheck />
          </span>
          <span className="mx-2"></span>
          <span className="desc">{t("ass2li2")}</span>
        </li>

        <li className="d-flex mb-3">
          <span className="simple-icon">
            <FaCheck />
          </span>
          <span className="mx-2"></span>
          <span className="desc">{t("ass2li3")}</span>
        </li>
      </ul>
      <p className="special mb-4">{t("ass2p3")}</p>
      <p className="special large-mb">{t("ass2p4")}</p>
      <h2 className="med-mb">
        {t("ass2h21")} <br /> (TCA)
      </h2>
      <p className="special large-mb">{t("ass2p5")}</p>
      <h2 className="med-mb">{t("ass2h22")}</h2>
      <p className="special med-mb">{t("ass2p6")}</p>
      <div className="row">
        <div className="col-md-6">
          <ul className="mt-3 px-4">
            {assTwoTeacherDomain.map(({ desc }, idx) => (
              <li key={idx} className="d-flex mb-3">
                <span className="simple-icon">
                  <FaCheck />
                </span>
                <span className="mx-2"></span>
                <span className="desc">{t(desc)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
          {/* <div className="domain-img w-100"></div> */}
          {
            isRTL =='ltr'?(<img className=" w-50 m-auto  h-auto " src={imgen} />)
            : (<img className=" w-50 m-auto  h-auto " src={imgar} />)
          }
        </div>
      </div>
      <p className="special large-mb">{t("ass2p7")}</p>
      <h2 className="med-mb">{t("ass2h23")} </h2>
      <p className="special large-mb">{t("ass2p8")}</p>
      <h2 className="med-mb"> {t("ass2h24")}</h2>
      <p className="special large-mb">{t("ass2p9")}</p>
      <h2 className="med-mb"> {t("ass2h22")}</h2>
      <p className="special med-mb">{t("ass2p10")}</p>
      <Assessment2Table />
      <p className="special large-mb">{t("ass2p11")}</p>
      <h2 className="med-mb">{t("ass2h26")}</h2>
      <p className="special">{t("ass2p12")}</p>
      <ul className="px-4 med-mb">
        {teacherCompetencies.map(({ desc }, idx) => (
          <li className="d-flex mb-3" key={idx}>
            <span className="simple-icon">
              <FaCheck />
            </span>
            <span className="mx-2"></span>
            <span className="desc"> {t(desc)} </span>
          </li>
        ))}
      </ul>
      <p className="special">{t("ass2p13")}</p>
      <ul className="px-4 large-mb">
        {teacherCompetencies2.map(({ desc }, idx) => (
          <li className="d-flex mb-3" key={idx}>
            <span className="simple-icon">
              <FaCheck />
            </span>
            <span className="mx-2"></span>
            <span className="desc"> {t(desc)} </span>
          </li>
        ))}
      </ul>
      <h2 className="med-mb">
        {t("ass2h27")} (IPDP)
      </h2>
      <p className="special med-mb">{t("ass2p14")}</p>
      <div className="row mb-4">
        <div className="col-md-8 d-flex align-items-center">
          <p className="special m-0">{t("ass2p15")}</p>
        </div>
        <Link className="col-md-4 btn-img text-center">
          <ImageComp src={btn1} alt="Click Now" />
        </Link>
      </div>
      <div className="row">
        <div className="col-md-8 d-flex align-items-center">
          <p className="special m-0">{t("ass2p16")}</p>
        </div>
        <Link className="col-md-4 btn-img text-center">
          <ImageComp src={btn2} alt="Click Now" />
        </Link>
      </div>
    </div>
  );
};

export default Assessment2Details;
