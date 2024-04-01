import React from 'react';
import classes from './CourseHeader.module.css';
function CourseHeader({ heading, linkone, linktow }) {
  return (
    <header className={classes.course__header}>
      <h2>{heading}</h2>
      <div className={classes.course_nav}>
        <li>{linkone}</li>
        <li>{linktow}</li>
      </div>
    </header>
  );
}

export default CourseHeader;
