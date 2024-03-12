import React from 'react';
import classes from './Quiz.module.css';
import LockIcon from '../../assests/LockIcon';
import QuizIcon from '../../assests/QuizIcon';

const Quiz = () => {
  return (
    <div className={classes.quiz__layout}>
      <div className={classes.quiz__para}>
        <QuizIcon />
        <p>Lesson 03 Exam :</p>
      </div>
      <div className={classes.quiz__locked}>
        <LockIcon />
        <p> 20 Quiz</p>
      </div>
    </div>
  );
};

export default Quiz;
