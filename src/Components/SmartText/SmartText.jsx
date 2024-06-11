import React from 'react';
import promImg from '../../assests/Vector.svg'
import classes from './SmartText.module.css';
function SmartText({ children }) {
  return (
    <div className={classes.smartText}>
      <img className="promImg" src={promImg} width=' 50px' />
      <p>{children}</p>
    </div>
  );
}

export default SmartText;
// margin: 10px;