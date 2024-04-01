import React from 'react';
import classes from './Label.module.css';
function Label({ children }) {
  return <span className={classes.label}>{children}</span>;
}

export default Label;
