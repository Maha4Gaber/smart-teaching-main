import React from 'react';
import classes from './ClassAnalysis.module.css';
import StarIcon from '../../assests/StarIcon';
import LockIcon from '../../assests/LockIcon';
import BookIcon from '../../assests/BookIcon';

const ClassAnalysis = () => {
  return (
    <div className={classes.class__analysis}>
      <h2>Dimensional analysis and effect size</h2>
      <div className={classes.class__middle}>
        <div className={classes.lock}>
          <h3>Prebuim</h3>
          <LockIcon />
        </div>
        <div className={classes.book}>
          <BookIcon />
          <span>23 Lesson</span>
        </div>
        <div className={classes.start}>
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <span>(44)</span>
        </div>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis modi
        iste corporis temporibus pariatur, quia eius praesentium qui laudantium
        magnam expedita sunt provident voluptate aut similique iure saepe
        exercitationem. Quis modi qui, nostrum totam reiciendis neque cumque,
        dicta quidem ipsa inventore ratione delectus? Sit quis sed deserunt quia
        voluptatibus soluta.
      </p>
    </div>
  );
};

export default ClassAnalysis;
