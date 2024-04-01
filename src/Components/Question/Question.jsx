import React from 'react';
import classes from './Qusestion.module.css';
const Question = ({ question, name, answer1, answer2, answer3, answer4 }) => {
  return (
    <div className={classes.qustion_card}>
      <h3 className={classes.quistion_head}>{question}</h3>
      <div className={classes.quistion_comp}>
        <div className={classes.single_quistion}>
          <input
            type='radio'
            id={answer1}
            name={name}
            value={answer1}
          />
          <label htmlFor={answer1}> {answer1}</label>
        </div>
        <div className={classes.single_quistion}>
          <input
            type='radio'
            id={answer2}
            name={name}
            value={answer2}
          />
          <label htmlFor={answer2}> {answer2}</label>
        </div>

        <div className={classes.single_quistion}>
          <input
            type='radio'
            id={answer3}
            name={name}
            value={answer3}
          />
          <label htmlFor={answer3}> {answer3}</label>
        </div>
        <div className={classes.single_quistion}>
          <input
            type='radio'
            id={answer4}
            name={name}
            value={answer4}
          />
          <label htmlFor={answer4}> {answer4}</label>
        </div>
      </div>
    </div>
  );
};

export default Question;
