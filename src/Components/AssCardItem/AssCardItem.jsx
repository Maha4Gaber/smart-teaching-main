import React from 'react';
import classes from './AssCardItem.module.css';
import RightIcon from '../../assests/RightIcon';
const AssCardItem = ({ title }) => {
  return (
    <div className={classes.assessmentCard__item}>
      <span>
        <RightIcon />
      </span>
      <li>{title}</li>
    </div>
  );
};

export default AssCardItem;
