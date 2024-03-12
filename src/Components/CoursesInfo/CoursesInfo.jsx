import React from 'react';
import classes from './CoursesInfo.module.css';
import Course from '../Course/Course';
function CoursesInfo({ children, title }) {
  return (
    <section className={classes.coursesInfo}>
      <h3>Genral Courses</h3>
      {children}
    </section>
  );
}

export default CoursesInfo;
