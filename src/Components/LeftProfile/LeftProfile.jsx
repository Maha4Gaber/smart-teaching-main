import React from 'react';
import classes from './LeftProfile.module.css';
const LeftProfile = () => {
  return (
    <aside className={classes.left_profile}>
      <header> Courses</header>

      <header>description</header>
      <p className={classes.left_lead}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
      <h5>MEMBER SINCE: NOVEMBER 9, 2018</h5>
    </aside>
  );
};

export default LeftProfile;
