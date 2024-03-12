import React from 'react';
import classes from './Reel.module.css';
import ReelImg from '../../assests/reel.png';
function Reel() {
  return (
    <div className={classes.reel}>
      <img
        src={ReelImg}
        alt='reel-img'
      />
      <header>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</header>
      <div className={classes.stats}>
        <h3>1k views</h3>
        <p>
          <span>Last Update:</span> Nov 05, 2023
        </p>
      </div>
    </div>
  );
}

export default Reel;
