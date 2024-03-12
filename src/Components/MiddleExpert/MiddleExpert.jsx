import React from 'react';
import classes from './MiddleExpert.module.css';
import TextAssessment from '../TextAssessment/TextAssessment';
import EffectLogo from '../../assests/expertTeacher.png';
import SpeedMoter from '../SpeedMoter/SpeedMoter';
import SmartText from '../SmartText/SmartText';
import { useTranslation } from 'react-i18next';
function MiddleExpert() {
  const {t} = useTranslation()
  return (
    <section className={classes.middle__expert}>
      <div>
        <SpeedMoter />
      </div>
      <div className={classes.empact__teaching}>
        <h2>{t("knowTheImapctOfTeachingStrategies")}</h2>
        <SmartText>
        {t("teachingStrategiesInfo1")}
        </SmartText>
        <SmartText>
          {t("teachingStrategiesInfo2")}
        </SmartText>
        <SmartText>
          {t("teachingStrategiesInfo3")}
        </SmartText>
      </div>
      <div className={classes.effect__size}>
        <h2>{t("effectSize")}</h2>
        <TextAssessment>
          {t("effectSizeInfo1")}
        </TextAssessment>
        <div className={classes.effect__size__img}>
          <img
            src={EffectLogo}
            alt='effect_logo'
          />
        </div>
      </div>
    </section>
  );
}

export default MiddleExpert;
