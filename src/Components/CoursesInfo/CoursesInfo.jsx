import React from 'react';
import classes from './CoursesInfo.module.css';
import Course from '../Course/Course';
import { useTranslation } from 'react-i18next';
function CoursesInfo({ children, title }) {
  const {t}=useTranslation()
  return (
    <section className={classes.coursesInfo}>
      <h3>{t(title)}</h3>
      {children}
    </section>
  );
}

export default CoursesInfo;
