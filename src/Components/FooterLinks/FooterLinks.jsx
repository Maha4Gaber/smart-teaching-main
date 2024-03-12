import React from 'react';
import classes from './FooterLinks.module.css';
function FooterLinks({ heading, children }) {
  return (
    <div className={classes.foot__link}>
      <h2> {heading} </h2>
      <ul className={classes.links}>{children}</ul>
    </div>
  );
}

export default FooterLinks;
