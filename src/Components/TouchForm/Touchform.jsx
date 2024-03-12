import React from 'react';
import classes from './TouchForm.module.css';
import LeftHeading from '../LeftHeading/LeftHeading';
const Touchform = () => {
  return (
    <div className={classes.touch__form}>
      <LeftHeading>Get in Touch</LeftHeading>
      <form className={classes.form__touch}>
        <input
          type='text'
          placeholder='Enter name*'
        />
        <input
          type='text'
          placeholder='Enter your mail*'
        />
        <input
          type='text'
          placeholder='Massage*'
        />
        <div>
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Touchform;
