import React from 'react';
import classes from './Blogs.module.css';
import Blog from '../Blog/Blog';
import { useTranslation } from 'react-i18next';
const Blogs = () => {
  const {t} = useTranslation()
  return (
    <>
      <div data-aos="zoom-in" className={classes.Blogs__content}>
        <h5>{t("latestNews")}</h5>
        <h3>{t("ourLatestBlog")}</h3>
        <p>
         {t("latestNewsBlogSubtitle")}
        </p>
      </div>
      <div className={classes.Blogs}>
        <Blog />
        <Blog />
        <Blog />
      </div>
    </>
  );
};

export default Blogs;
