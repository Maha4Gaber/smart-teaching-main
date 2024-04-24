import React from 'react';
import classes from './AsideSmart.module.css';

function AsideSmart({ children, height, width }) {
  let style = {};
  if (height) {
    style = { maxHeight: height, maxWidth: width };
  }
  return (
    <aside
      style={style}
      className={`mt-4 ${classes.asideSmart}`}
    >
      {children}
    </aside>
  );
}

export default AsideSmart;
