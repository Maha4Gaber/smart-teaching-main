import React from 'react';
import BtnRead from '../BtnRead/BtnRead';
import classes from './ResocuresCard.module.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowRight from '../../assests/ArrowRight';
function ResocuresCard({ onShow }) {
  return (
    <motion.div
      className={classes.resource__card}
      onClick={onShow}
      whileHover={{
        backgroundColor: 'rgb(33, 74, 74)',
        color: '#fff',
      }}
    >
      <h4>The Battle Over Best Christmas Cbd Oil Coupons and How to Win It</h4>
      <ul className={classes.resource__links}>
        <li>Uncategorized /</li>
        <li>By smart </li>
      </ul>
      <div>
        The Battle Over Best Christmas Cbd Oil Coupons and How to Win It Our 600
        Oil provides more than 20 milligrams of day-to-day cannabidiol to your
        physique.
        <br /> The oil is also putting stigma that’s related to medical
        marijuana to a conclusion by supplying a clinical experience without
        side consequences. 
        As CBD oil and other CBD …
      </div>
      <Link
        to='/course-details'
        className={classes.btnRead}
      >
        Read More &nbsp; <ArrowRight />
      </Link>
    </motion.div>
  );
}

export default ResocuresCard;
