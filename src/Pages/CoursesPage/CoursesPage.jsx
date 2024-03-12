import React from 'react';
import ServicesHeader from '../../Components/ServicesHeader/ServicesHeader';
import CoursesInfo from '../../Components/CoursesInfo/CoursesInfo';
import Course from '../../Components/Course/Course';

const CoursesPage = () => {
  return (
    <>
      <ServicesHeader
        title='Genral Courses'
        bold
      />
      <CoursesInfo title='Genral Courses'>
        <div className='row'>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
        <div className='col-xl-3 col-lg-4 col-md-6 col-sm-12'>
          <Course />
        </div>
          
        </div>
      </CoursesInfo>
    </>
  );
};

export default CoursesPage;
