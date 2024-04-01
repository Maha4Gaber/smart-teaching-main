import React from 'react';
import classes from './FormFooter.module.css';
import MainBtn from '../MainBtn/MainBtn';
function FormFooter() {
  return (
    <div className={classes.FormFooter}>
      <h3>Newsletter</h3>
      <p>You will get weekly update on Email</p>
      <div className={classes.input}>
        <input
          type='text'
          placeholder='Your Name'
        />
      </div>
      <div className={classes.input}>
        <input
          type='text'
          placeholder='Email Address'
        />
      </div>
      <div className={classes.input}>
        <input
          type='number'
          placeholder='Phone Number'
        />
      </div>
      <div>
        <MainBtn>Subscribe</MainBtn>
      </div>
    </div>
  );
}

export default FormFooter;
