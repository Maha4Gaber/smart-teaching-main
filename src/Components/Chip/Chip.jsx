import React from 'react';
import classes from './Chip.module.css';
const Chip = ({ children }) => {
  return <span className={classes.chip}>{children} </span>;
};

export default Chip;
