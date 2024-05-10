import React from 'react';
import classes from './SmartHeading.module.css';

function SmartHeading({ Img, heading, subheading }) {
  return (
    <header
      className={`${classes.smart__header}  main-img`}
      style={{ backgroundImage: `url(${Img})` }}
    >
      <figcaption>
        <h2>{heading}
        <h3>{subheading}</h3>
        </h2>
        
      </figcaption>
    </header>
  );
}

export default SmartHeading;
