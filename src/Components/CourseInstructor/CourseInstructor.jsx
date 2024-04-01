import React from 'react';
import classes from './CourseInstructor.module.css';
import Avatar from '../../assests/avatar.png';
import Social from '../Social/Social';
const CourseInstructor = () => {
  return (
    <div className={classes.course_instructor}>
      <div className={classes.instructor__avatar}>
        <img
          src={Avatar}
          alt='avatat'
        />
      </div>
      <div className={classes.instructor__detail}>
        <h3>Rohan De Spond</h3>
        <h4>University lecturer</h4>
        <p>
          Lorem Ipsum is simply dummying text of the printing andtypesetting
          industry rhoncus, dolor eget viverra pretium, dolor tellus aliquet
          nunc, vitae ultricies erat elit eu
        </p>
        <Social />
      </div>
    </div>
  );
};

export default CourseInstructor;
