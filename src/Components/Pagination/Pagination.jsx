import React from 'react';
import BtnArrowLeft from '../../assests/BtnArrowLeft';
import BtnArrowRight from '../../assests/BtnArrowRight';
import classes from './Pagination.module.css';
function Pagination() {
  return (
    <ul className={classes.Pagination}>
      <button>
        <BtnArrowLeft />
      </button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>
        <BtnArrowRight />
      </button>
    </ul>
  );
}

export default Pagination;
