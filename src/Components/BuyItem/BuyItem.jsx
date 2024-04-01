import React from 'react';
import classes from './BuyItem.module.css';
import Chip from '../Chip/Chip';
const BuyItem = ({ name, desc }) => {
  return (
    <div className={classes.buy_item}>
      <p>{name}</p>
      <Chip>{desc} </Chip>
    </div>
  );
};

export default BuyItem;
