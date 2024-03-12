import React from 'react';
import classes from './SingleCourse.module.css';
import CourseImg from '../../assests/singlecourse.png';
const SingleCourse = () => {
  return (
    <div className={classes.single_course}>
      <img
        src={CourseImg}
        alt='single '
      />
      <div className={classes.desc__price}>
        <p>$32,000</p>
        <span>Education and development</span>
      </div>
    </div>
  );
};

export default SingleCourse;
