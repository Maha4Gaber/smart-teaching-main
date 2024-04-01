import React from 'react';
import classes from './TextAssessment.module.css';
const TextAssessment = ({ children }) => {
  return <p className={classes.text_assessment}>{children}</p>;
};

export default TextAssessment;
