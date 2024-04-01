import React from 'react';
import classes from './ResultInf.module.css';
function ResultInf({ title, value }) {
  return (
    <div className={classes.ResultInf}>
      <h6>{title}</h6>
      <div>{value}</div>
    </div>
  );
}

export default ResultInf;
