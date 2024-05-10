import React from 'react';
import classes from './Blog.module.css';
import BlogImg from '../../assests/BlogImg.png';
import MainBtn from '../MainBtn/MainBtn';
import ArrowRight from '../../assests/ArrowRight';
import Calender from '../../assests/Calender';
import Person from '../../assests/Person';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BiArrowToLeft, BiLeftArrowAlt } from 'react-icons/bi';
function Blog() {
    const {t,i18n} = useTranslation()
    const lang = i18n.language;
  let isRTL = lang == "en" ? "ltr" : "rtl";
    
  return (
      <div data-aos="flip-left" className={classes.blog}>
          <div className={classes.img__container}>
              <button className={classes.blog__btn}>{t("consulting")}</button>
              <img src={BlogImg} alt="blogImage" />
          </div>
          <div className={classes.blog__details}>
              <div className={classes.blog__detail}>
                  <Calender />
                  <span> Oct 27, 2022</span>
              </div>
              <div className={classes.blog__detail}>
                  <Person />
                  <span> Bcom</span>
              </div>
          </div>
          <h2>{t("earnGoodMoney")}</h2>
          <h3>
          {t("blogDetailsCard")}
          </h3>
              <button className={classes.blog__btb_edit}>
                  <Link className="text-dark" to="/blogdetails/1">
                      {t("readMore")} &nbsp; 
                      {
                isRTL=='ltr'?(<ArrowRight className="ms-3 fs-4" />):(<BiLeftArrowAlt className="ms-3 fs-4" />)
              }
                      {/* <ArrowRight /> */}
                  </Link>
              </button>
      </div>
  );
}

export default Blog;
