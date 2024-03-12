import React from 'react';
import classes from './Infleance.module.css';
import { useTranslation } from 'react-i18next';
function Influeance({ img, title }) {
  const {t} = useTranslation()
  return (
    <div className={classes.influeance}>
      <img
        src={img}
        alt='inf-img'
      />
      <h5>{t(title)}</h5>
    </div>
  );
}

export default Influeance;
