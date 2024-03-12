import React from 'react';
import classes from './Certification.module.css';
import CourseHeader from '../../Components/CourseHeader/CourseHeader';
import CertiCard from '../../Components/CertiCard/CertiCard';
const Certification = () => {
  return (
    <>
      <CourseHeader
        heading='Certificates'
        linktow='Certificates'
        linkone='Home'
      />

      <div className={classes.certifaction}>
        <CertiCard />
        <CertiCard />
      </div>
    </>
  );
};

export default Certification;
