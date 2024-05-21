import React, { useEffect, useState } from 'react';
import classes from './Blogs.module.css';
import Blog from '../Blog/Blog';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
const Blogs = () => {
  const [blogs, setblogs] = useState([]);
    useEffect(() => {
        const getdata = async () => {
            try {
                await axios.get("api/v3/blogs/").then((res) => {
                // console.log(res.data.slice(0,3));
                setblogs(res.data.slice(0,3))
                });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

          getdata();
      }, []);
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
      {/* {courses.map((cours, id) => (
        <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <Course id={cours.id} cours={cours} />
        </div>
        ))} */}
        {/* { */}
          {/* blogs.map((blog,id)=>{ */}
            {/* <>00 */}
            <Blog  id={1} />
            <Blog  id={2} />
            <Blog  id={3} />
            {/* </> */}
          {/* }) */}
        {/* } */}
      </div>
    </>
  );
};

export default Blogs;
