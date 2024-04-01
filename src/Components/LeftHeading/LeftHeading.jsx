import React, { Children } from 'react';
import classes from './LeftHeading.module.css';
const LeftHeading = ({ children }) => {
  return <h3 className={classes.left_heading}>{children}</h3>;
};

export default LeftHeading;
