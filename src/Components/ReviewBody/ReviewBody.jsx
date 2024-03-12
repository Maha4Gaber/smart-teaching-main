import React from 'react';
import classes from './ReviewBody.module.css';

import Reviewer from '../Reviewer/Reviewer';
import ReviewerFrom from '../ReviwerForm/ReviewerFrom';
const ReviewBody = () => {
  return (
    <div className={classes.review_body}>
      <h2>Customer Reviews</h2>
      <Reviewer />
      <Reviewer />
      <Reviewer />
      <Reviewer />
      <ReviewerFrom />
    </div>
  );
};

export default ReviewBody;
