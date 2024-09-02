import React from 'react';
import classes from './Book.module.css';
// import book from '../../assests/book.png';
import BtnRead from '../BtnRead/BtnRead';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ArrowRight from '../../assests/ArrowRight';
import { useTranslation } from 'react-i18next';

function Book({book}) {
  const {t}=useTranslation()
  return (
    <motion.div className={classes.book}>
      <div className={classes.book__container}>
        <img
        className='h-auto    '
          alt='bookImg'
          src={book.image}
        />
      </div>
      <h4>{book.title}</h4>
      
      {/* <hr /> */}
      {classes.book__tag&& <p className="mb-0">{book.category}</p>}
      <div className={classes.book__tag}>
        <span>{book.type}</span>
        <a
          href={book.file}
          className={classes.btnRead}
        >
          {t('Download')} &nbsp; <ArrowRight />
        </a>
      </div>
    </motion.div>
  );
}

export default Book;
