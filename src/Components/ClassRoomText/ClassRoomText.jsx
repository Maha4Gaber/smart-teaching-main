import React from 'react';
import classes from './ClassRoomText.module.css';
function ClassRoomText({ title, name }) {
  return (
    <div className={classes.main__coures_desc}>
      <p>{title} </p>
      <p>{name}</p>
    </div>
  );
}

export default ClassRoomText;
