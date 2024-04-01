import React from 'react';
import classes from './Reviewer.module.css';
import Avatar from '../../assests/avatar.png';
function Reviewer() {
  return (
    <div className={classes.reviewr}>
      <div className={classes.reviewr__img}>
        <img
          src={Avatar}
          alt='avatar'
        />
      </div>
      <div className={classes.reviewr__content}>
        <div className={classes.reviewr__heading}>
          <h3>Rohan De Spond</h3>
          <span>Nov 05,2023</span>
        </div>
        <p>
          Lorem Ipsum is simply dummying text of the printing andtypesetting
          industry rhoncus, dolor eget viverra pretium, dolor tellus aliquet
          nunc, vitae ultricies erat elit eu
        </p>
      </div>
    </div>
  );
}

export default Reviewer;
