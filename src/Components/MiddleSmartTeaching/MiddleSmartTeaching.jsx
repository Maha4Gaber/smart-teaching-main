import React from 'react';
import classes from './MiddleSmartTeaching.module.css';
import SmartText from '../SmartText/SmartText';
import Teacher from '../../assests/teacher.png';
import promImg from '../../assests/prof.png';
import StudentImg from '../../assests/boy.png';
import AnaPic from '../../assests/analyes.png';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';
const MiddleSmartTeaching = () => {
  const {t} = useTranslation()
  return (
    <section className={classes.middleSmart}>
      <h3>{t("smartTeachingSystem")}®</h3>
      <div className={classes.middleSmart__top}>
        <SmartText>
          {t("whatIsSTS1")}
        </SmartText>
        <SmartText>
        {t("whatIsSTS2")}
        </SmartText>
        <SmartText>
        {t("whatIsSTS3")}
        </SmartText>
      </div>
      <h3>{t("becomeSmartSchool")}</h3>
      <div className={classes.middleSmart__z}>
        <img
          src={promImg}
          alt='teacher'
        />
        <div className={classes.z__content}>
          <h4>{t("becomeSmartSchoolTitle1")}</h4>
          <SmartText>
          {t("becomeSmartSchoolInfo1")}
          </SmartText>
          <SmartText>
          {t("becomeSmartSchoolInfo2")}
          </SmartText>
          <SmartText>
          {t("becomeSmartSchoolInfo3")}
          </SmartText>
        </div>
      </div>
      <div className={classes.middleSmart__z}>
        <div className={`${classes.z__content} ${classes.blockA}`}>
          <h4>{t("becomeSmartSchoolTitle2")}</h4>
          <SmartText>
            {t("becomeSmartSchoolInfo4")}
          </SmartText>
          <SmartText>
            {t("becomeSmartSchoolInfo5")}
          </SmartText>
        </div>
        <img
          src={Teacher}
          alt='teacher'
          id='blockB'
        />
      </div>
      <div className={classes.middleSmart__z}>
        <img
          src={StudentImg}
          alt='teacher'
          id='blockC'
        />
        <div
          className={classes.z__content}
          id='blockD'
        >
          <h4>{t("becomeSmartSchoolTitle3")}</h4>
          <SmartText>
          {t("becomeSmartSchoolInfo6")}
          </SmartText>
          <SmartText>
          {t("becomeSmartSchoolInfo7")}
          </SmartText>
        </div>
      </div>
      <div className={classes.middleSmart__z}>
        <div className={`${classes.z__content} ${classes.blockZ}`}>
          <h4>{t("becomeSmartSchoolTitle4")}</h4>
          <SmartText>
            {t("becomeSmartSchoolInfo8")}
          </SmartText>
          <SmartText>
            {t("becomeSmartSchoolInfo9")}
          </SmartText>
        </div>
        <img
          src={AnaPic}
          alt='teacher'
        />
      </div>
    </section>
  );
};

export default MiddleSmartTeaching;
