import React from 'react';
import classes from './BuyNow.module.css';
import ViedoImg from '../../assests/video.png';
import LockIcon from '../../assests/LockIcon';
import BuyItem from '../BuyItem/BuyItem';
const BuyNow = () => {
  return (
    <div className='container-fluid '>
      <div className={classes.buy__now}>
        <div className={classes.buy_viedo}>
          <img
            src={ViedoImg}
            alt='video'
          />
          <div className={classes.buy_type_disc}>
            <div className={classes.buy_type}>
              <h3>Premium</h3>
              <LockIcon />
            </div>
            <span className={classes.buy_disc}>68% OFF</span>
          </div>
        </div>
        <div className={classes.buy__now__btn}>
          <button>Buy Now</button>
          <span> 45-Days Money-Back Guarantee</span>
        </div>
        <div className={classes.buy_now_content}>
          <BuyItem
            name='Instructor:'
            desc='D. Willaim'
          />
          <BuyItem
            name='Start Date'
            desc='05 Dec 2024'
          />
          <BuyItem
            name='Total Duration'
            desc='08Hrs 32Min'
          />
          <BuyItem
            name='Enrolled'
            desc='100'
          />
          <BuyItem
            name='Lectures'
            desc='30'
          />
          <BuyItem
            name='Skill Level'
            desc='Basic'
          />
          <BuyItem
            name='Quiz'
            desc='Yes'
          />
          <BuyItem
            name='Certificate'
            desc='Yes'
          />
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
