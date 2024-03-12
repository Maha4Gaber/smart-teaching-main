import React from 'react';
import classes from './ReelsAll.module.css';
import Pagination from '../Pagination/Pagination';
import Reel from '../Reel/Reel';
function ReelsAll() {
  return (
    <div className={classes.reels_all}>
      <div className='info__layout'>
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
        <Reel />
      </div>
      <Pagination />
    </div>
  );
}

export default ReelsAll;
