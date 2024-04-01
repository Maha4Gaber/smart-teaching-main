import React from 'react';
import classes from './ReviewerFrom.module.css';
const ReviewerFrom = () => {
  return (
    <div className={classes.reviewer_From}>
      <h3>Add Review</h3>
      <form className={classes.form_review}>
        <input
          type='text'
          placeholder='Enter your name'
        />
        <textarea placeholder='Enter your  comments...'></textarea>
        <div className={classes.actions}>
          <div className={classes.reviewer_From__check}>
            <input
              type='checkbox'
              id='saveme'
            />
            <label htmlFor='saveme'> Save my name, comment.</label>
          </div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReviewerFrom;
