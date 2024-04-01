import React from 'react';
import classes from './PopCourses.module.css';
import LeftHeading from '../LeftHeading/LeftHeading';
import SingleCourse from '../SingleCourse/SingleCourse';
const PopCourses = () => {
  return (
    <div className={classes.pop__courses}>
      <LeftHeading>Populer Course</LeftHeading>
      <SingleCourse />
      <SingleCourse />
      <SingleCourse />
    </div>
  );
};

export default PopCourses;
