import React from 'react';
import classes from './ClassForm.module.css';
function ClassFrom() {
  return (
    <div className={classes.form__class}>
      <h4>Write your comment</h4>
      <form>
        <div className={classes.form_layout}>
          <input placeholder='Enter your name*' />
          <input placeholder='Enter your mail**' />
        </div>
        <div className={classes.form_layout}>
          <input placeholder='Enter your  number*' />
        </div>
        <textarea className={classes.textarea}>Enter your message*</textarea>
        <div className={classes.form__submit}>
          <div className={classes.check__box}>
            <input type='checkbox' />
            <span>
              {' '}
              Save my name, email, and website in this browser for the next time
              I comment.
            </span>
          </div>
          <button className={classes.from_btn}>Post a Comment</button>
        </div>
      </form>
    </div>
  );
}

export default ClassFrom;
