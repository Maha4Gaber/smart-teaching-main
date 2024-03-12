import React from 'react';
import classes from './SmartHeading.module.css';

function SmartHeading({ Img, heading, subheading }) {
  return (
    <header
      className={classes.smart__header}
      style={{ backgroundImage: `url(${Img})` }}
    >
      <h2>{heading}</h2>
      <h3>{subheading}</h3>
    </header>
  );
}

export default SmartHeading;
