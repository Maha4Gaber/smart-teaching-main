import React, { useEffect, useState } from 'react';
import classes from './Blog.module.css';
import BlogImg from '../../assests/BlogImg.png';
import MainBtn from '../MainBtn/MainBtn';
import ArrowRight from '../../assests/ArrowRight';
import Calender from '../../assests/Calender';
import Person from '../../assests/Person';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BiArrowToLeft, BiLeftArrowAlt } from 'react-icons/bi';
import axios from 'axios';
function Blog({slug}) {
    const [blogcontent, setblogcontent] = useState(null);
    const {t,i18n} = useTranslation()
    const lang = i18n.language;
  let isRTL = lang == "en" ? "ltr" : "rtl";
//   const [htmlContent, setHtmlContent] = useState('');
  useEffect(() => {
    // console.log(blog);
    // setblogcontent(blog)
    const getdata = async () => {
        try {
            await axios.get("api/v3/blogs/" + slug).then((res) => {
            // console.log(res.data);
            setblogcontent(res.data)
            // setHtmlContent(res.data.description);

            });
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

      getdata();
  }, []);
  return (
    // <></>
      <div data-aos="flip-left" className={classes.blog}>
          <div className={classes.img__container}>
              <button className={classes.blog__btn}>{blogcontent!==null&&blogcontent.created_by.role}</button>
              <img src={blogcontent!==null&&blogcontent.pic} alt="blogImage" />
          </div>
          <div className={classes.blog__details}>
              <div className={classes.blog__detail}>
                  <Calender />
                  <span>{blogcontent!==null&&blogcontent.updated_at.slice(0,10)}</span>
              </div>
              <div className={classes.blog__detail}>
                  <Person />
                  <span> {blogcontent!==null&&blogcontent.created_by.full_name}</span>
              </div>
          </div>
          <h2>{blogcontent!==null&&blogcontent.title}</h2>
          {/* <h3>
          {blogcontent!==null&&blogcontent.description}
          </h3> */}
          {/* <div className="" dangerouslySetInnerHTML={{ __html: htmlContent }} ></div> */}
              <button className={classes.blog__btb_edit}>
                  <Link className="text-dark" to={"/blogdetails/" + slug }>
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
