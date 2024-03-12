import React from 'react';
import classes from './AssessmentCard.module.css';

import ArrowRight from '../../assests/ArrowRight';
import RightIcon from '../../assests/RightIcon';
import AssCardItem from '../AssCardItem/AssCardItem';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

const AssessmentCard = ({ items, logo, title }) => {
  const {t} = useTranslation()
  return (
    <div className={classes.assessmentCard}>
      <div className={classes.assessmentCard__logo}>
        <img
          src={logo}
          alt='logo'
        />
      </div>
      <h3>{title}</h3>
      <h4>{t("can-be-used")}</h4>
      {items.map((item) => (
        <AssCardItem
          key={item}
          title={item}
        />
      ))}
    </div>
  );
};

export default AssessmentCard;
