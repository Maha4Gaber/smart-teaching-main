import React from 'react';
import classes from './CoursesClass.module.css';
import Course from '../Course/Course';
const CoursesClass = () => {
  return (
    <div className={classes.courses_class}>
      <header>
        <h3>Author More Courses</h3>
        <span>More Courses...</span>
      </header>
      <div className='row'>
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Course price='$25'/>
      </div>
      <div className='col-lg-4 col-md-6 col-sm-12'>
        <Course price='$25'/>
      </div>
        
      </div>
    </div>
  );
};

export default CoursesClass;
