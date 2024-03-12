import React from 'react';
import classes from './MainBtn.module.css';
function MainBtn({ children, shadow, black }) {
  let style = {};
  if (shadow) {
    style = { boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' };
  } else if (black) {
    style = { color: '#0F0F0F' };
  } else if (shadow && black) {
    style = {
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      color: '#0F0F0F',
    };
  }
  return (
      
          <button style={style} className={classes.mainBtn}>
              {children}
          </button>
      
  );
}

export default MainBtn;
