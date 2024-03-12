import React from 'react';
import classes from './ServicesHeader.module.css';
import BtnArrowLeft from '../../assests/BtnArrowLeft';
import BtnArrowRight from '../../assests/BtnArrowRight';

function ServicesHeader({ title, bold, onExpert, nav }) {
  let style = {};
  if (bold) style = { fontWeight: 'bold', fontSize: '32px' };
  return (
    <div className={classes.services__header}>
      <h3 style={style}>{title}</h3>
      {nav && (
        <div className={classes.services__navigation}>
          <button onClick={onExpert}>
            <BtnArrowLeft />
          </button>
          <button onClick={onExpert}>
            <BtnArrowRight />
          </button>
        </div>
      )}
    </div>
  );
}

export default ServicesHeader;
