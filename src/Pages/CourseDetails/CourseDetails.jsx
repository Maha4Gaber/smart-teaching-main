import React from 'react';
import ServicesHeader from '../../Components/ServicesHeader/ServicesHeader';
import CourseHeader from '../../Components/CourseHeader/CourseHeader';
import { ClassRoom } from '../../Components/CalassRoom/ClassRoom';

function CourseDetails() {
  return (
    <>
      <CourseHeader
        heading='Course-Details'
        linkone='Home'
        linktow='Course-Details'
      />
      <ClassRoom />
    </>
  );
}

export default CourseDetails;
