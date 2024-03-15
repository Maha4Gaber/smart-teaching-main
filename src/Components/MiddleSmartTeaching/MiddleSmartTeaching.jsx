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
      <h3>{t("smartTeachingSystem")}<small>®</small></h3>
      <div className={classes.middleSmart__top}>
        <SmartText>
          {t("whatIsSTS1")}<small>®</small>
          {t("whatIsSTS11")}
        </SmartText>
        <SmartText>
        {t("whatIsSTS2")}
        </SmartText>
        <SmartText>
        {t("whatIsSTS3")}
        </SmartText>
      </div>
      <h3>{t("becomeSmartSchool")}
      
      </h3>
      <div className={` row ${classes.middleSmart__z}`}>
        <div className='col-4'> 
          <img
          src={promImg}
          alt='teacher'
        /> 
        </div>
        <div className={`col-7 ${classes.z__content}`}        >
          <h4>
          {t("becomeSmartSchoolTitle1")}
          </h4>
          <SmartText>
          {t("becomeSmartSchoolTitle1")}
          </SmartText>
          <SmartText>
          {t("becomeSmartSchoolInfo2")}
          </SmartText>
          <SmartText>
          {t("becomeSmartSchoolInfo3")}
          </SmartText>
        </div>
      </div>
      <div className={` row ${classes.middleSmart__z}`}>
        

        <div className={`col-7 ${classes.z__content} ${classes.blockA}`}>
          <h4>{t("becomeSmartSchoolTitle2")}
          <small>®</small>
          {t("becomeSmartSchoolTitle22")}
          </h4>
          <SmartText>
            {t("becomeSmartSchoolInfo4")}
          </SmartText>
          <SmartText>
            {t("becomeSmartSchoolInfo5")}
            <small>®</small>
            {t("becomeSmartSchoolInfo55")}
          </SmartText>
        </div>
        <div className='col-4'> 
          <img
          src={Teacher}
          alt='teacher'
          id='blockB'
        /> 
        </div>
      </div>
      <div className={` row ${classes.middleSmart__z}`}>
      <div className='col-4'>
      <img
          src={StudentImg}
          alt='teacher'
          id='blockC'
        />
      </div>
        
        <div
          className={`col-7 ${classes.z__content}`}
          id='blockD'
        >
          <h4>
          {t("becomeSmartSchoolTitle3")}<small>®</small>
          {t("becomeSmartSchoolTitle33")}
          </h4>
          <SmartText>
          {t("becomeSmartSchoolInfo6")}
          </SmartText>
          <SmartText>
          {t("becomeSmartSchoolInfo7")}
          </SmartText>
        </div>
      </div>
      <div className={` row ${classes.middleSmart__z}`}>
        <div className={`col-7 ${classes.z__content} ${classes.blockZ}`}>
          <h4>{t("becomeSmartSchoolTitle4")}</h4>
          <SmartText>
            {t("becomeSmartSchoolInfo8")}
          </SmartText>
          <SmartText>
            {t("becomeSmartSchoolInfo9")}
          </SmartText>
        </div>
        <div className='col-4'>
        <img
          src={AnaPic}
          alt='teacher'
        />
        </div>
        
      </div>
    </section>
  );
};

export default MiddleSmartTeaching;
