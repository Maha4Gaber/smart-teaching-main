import React, { useState } from 'react';
import classes from './ClassContent.module.css';
import CurriculumIcon from '../../assests/CurriculumIcon';
import DescriptionIcon from '../../assests/DescriptionIcon';
import ReviewIcon from '../../assests/ReviewIcon';
import Instructor from '../../assests/Instructor';
import Chip from '../Chip/Chip';
import { Accordion } from '../Accordion/Accordion';
import ClassDescription from '../ClassDescription/ClassDescription';
import CourseInstructor from '../CourseInstructor/CourseInstructor';
import ReviewBody from '../ReviewBody/ReviewBody';
function ClassContent() {
  const [type, setType] = useState('curriculum');
  function handleDescription() {
    setType('description');
  }
  return (
    <div className={classes.class__content}>
      <ul className={classes.nav_content}>
        <button
          className={type === 'curriculum' ? classes.active : ''}
          onClick={() => setType('curriculum')}
        >
          <CurriculumIcon /> Curriculum
        </button>
        <button
          className={type === 'description' ? classes.active : ''}
          onClick={handleDescription}
        >
          <DescriptionIcon /> Description
        </button>
        <button
          className={type === 'reviews' ? classes.active : ''}
          onClick={() => setType('reviews')}
        >
          <ReviewIcon /> Reviews
        </button>
        <button
          className={type === 'instruct' ? classes.active : ''}
          onClick={() => setType('instruct')}
        >
          <Instructor /> Instructor
        </button>
      </ul>
      {type === 'curriculum' && (
        <div style={{ width: '90%' }}>
          <Accordion
            title='Course Fundamentals'
            time='1hr 35min'
            id='one'
            one={true}
          />
          <Accordion
            title='Course Core Concept'
            time='3hr 10min'
            id='two'
          />
          <Accordion
            title='Course Key Features'
            time='2hr 10min'
            id='three'
          />
          <Accordion
            title='Course Conclusion'
            time='2hr 10min'
            id='four'
          />
        </div>
      )}
      {type === 'description' && <ClassDescription />}
      {type === 'reviews' && <ReviewBody />}
      {type === 'instruct' && <CourseInstructor />}
    </div>
  );
}

export default ClassContent;
