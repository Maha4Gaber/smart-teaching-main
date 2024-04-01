import React from 'react';
import ArrowRight from '../../assests/ArrowRight';
import classes from './BtnRead.module.css';
import { Link } from 'react-router-dom';
const BtnRead = ({ title = 'Read More' }) => {
  return (
      <Link to="/course-details" className={classes.btnRead}>
          {title} &nbsp; <ArrowRight />
      </Link>
  );
};

export default BtnRead;
