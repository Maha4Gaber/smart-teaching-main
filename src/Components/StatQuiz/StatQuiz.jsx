import React from 'react';
import classes from './StatQuiz.module.css';
const StatQuiz = ({ children }) => {
  return <section className={classes.state_quiz}>{children}</section>;
};

export default StatQuiz;
