import React from 'react';
import classes from './Book.module.css';
import book from '../../assests/book.png';
import BtnRead from '../BtnRead/BtnRead';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowRight from '../../assests/ArrowRight';

function Book() {
  return (
    <motion.div className={classes.book}>
      <div className={classes.book__container}>
        <img
          alt='bookImg'
          src={book}
        />
      </div>
      <h4>Book name</h4>
      <hr />
      <div className={classes.book__tag}>
        <span>Premium</span>
        <Link
          to='/course-details'
          className={classes.btnRead}
        >
          Download &nbsp; <ArrowRight />
        </Link>
      </div>
    </motion.div>
  );
}

export default Book;
