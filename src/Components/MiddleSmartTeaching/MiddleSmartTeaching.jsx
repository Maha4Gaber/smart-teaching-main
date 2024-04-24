import React from 'react';
import classes from './MiddleSmartTeaching.module.css';
import SmartText from '../SmartText/SmartText';
import Teacher from '../../assests/teacher.png';
import promImg from '../../assests/prof.png';
import StudentImg from '../../assests/boy.png';
import AnaPic from '../../assests/analyes.png';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
const MiddleSmartTeaching = () => {
  const {t} = useTranslation()
  return (
    <section className={` position-relative px-4 ${classes.middleSmart}`}>
      <h3>
        {parse(t("smartTeachingSystem"))} <small>®</small>{" "}
      </h3>
      <div className={` position-relative ${classes.middleSmart__top}`}>
        <SmartText>
          {parse(t("whatIsSTS1"))} <small>®</small> {parse(t("whatIsSTS11"))}
        </SmartText>
        <SmartText>{parse(t("whatIsSTS2"))} {parse(t("whatIsSTS22"))}</SmartText>
        <SmartText>{parse(t("whatIsSTS3"))}</SmartText>
      </div>
      <h3>{parse(t("becomeSmartSchool"))}</h3>
      <br />
      <br />
      <div className={` row ${classes.middleSmart__z}`}>
        
        <div className={`col-sm-12 col-lg-8 ${classes.z__content}`}>
          <h4>{parse(t("becomeSmartSchoolTitle1"))}</h4>
          <SmartText>{parse(t("becomeSmartSchoolInfo1"))}</SmartText>
          <SmartText>{parse(t("becomeSmartSchoolInfo2"))}</SmartText>
          <SmartText>{parse(t("becomeSmartSchoolInfo3"))}</SmartText>
        </div>
        <div className={`${classes.image} col-sm-12 col-lg-4`}>
          <img src={promImg} alt="teacher" />
        </div>
      </div>
      <br />
      <br />
      <div className={` row ${classes.middleSmart__z}`}>
        <div className={`${classes.image} col-sm-12 col-lg-4`}>
          <img src={Teacher} alt="teacher" id="blockB" />
        </div>
        <div
          className={`col-sm-12 col-lg-8 ${classes.z__content} ${classes.blockA}`}
        >
          <h4>
            {t("becomeSmartSchoolTitle2")}
            <small>®</small>
            {t("becomeSmartSchoolTitle22")}
          </h4>
          <SmartText>{t("becomeSmartSchoolInfo4")}</SmartText>
          <SmartText>
            {t("becomeSmartSchoolInfo5")}
            <small>®</small>
            {t("becomeSmartSchoolInfo55")}
          </SmartText>
        </div>
      </div>
      <br />
      <br />
      <div className={` row ${classes.middleSmart__z}`}>
        

        <div
          className={`col-sm-12 col-lg-8 po ${classes.z__content}`}
          id="blockD"
        >
          <h4 className="position-relative">
            {parse(t("becomeSmartSchoolTitle3"))}
            <small>®</small>
            {t("becomeSmartSchoolTitle33")}
          </h4>
          <SmartText>{t("becomeSmartSchoolInfo6")}</SmartText>
          <SmartText>{t("becomeSmartSchoolInfo7")}</SmartText>
        </div>
        <div className={`${classes.image} col-sm-12 col-lg-4`}>
          <img src={StudentImg} alt="teacher" id="blockC" />
        </div>
      </div>
      <br />
      <br />
      <div className={` row ${classes.middleSmart__z}`}>
        <div className={`${classes.image} col-sm-12 col-lg-4`}>
          <img src={AnaPic} alt="teacher" />
        </div>
        <div
          className={`col-sm-12 col-lg-8 ${classes.z__content} ${classes.blockZ}`}
        >
          <h4>{t("becomeSmartSchoolTitle4")}</h4>
          <SmartText>{t("becomeSmartSchoolInfo8")}</SmartText>
          <SmartText>{t("becomeSmartSchoolInfo9")}</SmartText>
        </div>
      </div>
    </section>
  );
};

export default MiddleSmartTeaching;
