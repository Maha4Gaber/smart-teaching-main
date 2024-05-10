import React from 'react';
import classes from './Book.module.css';
// import book from '../../assests/book.png';
import BtnRead from '../BtnRead/BtnRead';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowRight from '../../assests/ArrowRight';

function Book({book}) {
  return (
    <motion.div className={classes.book}>
      <div className={classes.book__container}>
        <img
          alt='bookImg'
          src={book.image}
        />
      </div>
      <h4>{book.title}</h4>
      <p className="cat">{book.category}</p>
      {/* <hr /> */}
      <div className={classes.book__tag}>
        <span>{book.type}</span>
        <a
          href={book.file}
          className={classes.btnRead}
        >
          Download &nbsp; <ArrowRight />
        </a>
      </div>
    </motion.div>
  );
}

export default Book;
