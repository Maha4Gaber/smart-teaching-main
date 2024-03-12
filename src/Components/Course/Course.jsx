import React from 'react';
import classes from './Course.module.css';
import CourseImg from '../../assests/couresImg.jpg';
import Love from '../../assests/Love';
import BtnRead from '../BtnRead/BtnRead';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ArrowRight from '../../assests/ArrowRight';
import { useTranslation } from 'react-i18next';
function Course({ price }) {
    const {t} = useTranslation()
  return (
      <motion.div className={classes.course} data-aos="flip-right">
          <div className={classes.course__container}>
              <div className={classes.container__tag}>
                  <span>
                      <Love />
                  </span>
                  <button>{t("EBTS")}</button>
              </div>
              <img src={CourseImg} alt="courseImg" />
          </div>
          <h4>{t("DAES")}</h4>
          <hr />
          <div className={classes.course__tag}>
              <span>{price ?? t("free")}</span>
              <Link to="/course-details" className={classes.btnRead}>
                {t("readMore")} &nbsp; <ArrowRight />
              </Link>
          </div>
      </motion.div>
  );
}

export default Course;
