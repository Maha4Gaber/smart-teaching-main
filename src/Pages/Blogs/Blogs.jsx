import React, { useEffect, useState } from "react";
import {Link, useNavigate } from "react-router-dom";
import { blogsContent } from "../../data";
import BlogContent from "../../Components/BlogDetailsComponents/BlogContent/BlogContent";

import FollowBlog from "../../Components/BlogDetailsComponents/FollowBlog/FollowBlog";
import BlogSearch from "../../Components/BlogDetailsComponents/BlogSearch/BlogSearch";
import BlogContact from "../../Components/BlogDetailsComponents/BlogContact/BlogContact";
import BlogCategories from "../../Components/BlogDetailsComponents/BlogCategories/BlogCategories";
import PaginationComp from "./../../Components/PaginationComp/PaginationComp";

import "./Blogs.css";
import axios from "axios";
import { useTranslation } from "react-i18next";
const Blogs = () => {
  const { t, i18n } = useTranslation();
  let navigate = useNavigate();
  const [blogs, setblogs] = useState([]);

  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v3/blogs/").then((res) => {
          // console.log(res.data);
          setblogs(res.data)
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // if (!localStorage.user_data) navigate("login");
    // else {
      getdata();
    // }
  }, []);

  return (
    <section className="blog-page">
      <div className="section-bg">
        <div>
          <h1>{t('Blog-Page')}</h1>
          <div className="d-flex justify-content-around">
            <Link to="/">{t('home')}</Link>
            {/* <span> Blog Page </span> */}
          </div>
        </div>
      </div>

      <div className="blog-page-container">
        <div className="row">
          <div className="">
            <div className="row gy-4">
              {blogs.map((blog, idx) => (
                <div className="col-6 col-md-4 col-lg-3" key={idx}>
                  <BlogContent {...blog} slice2={true}  blogId={blog.id} />
                </div>
              ))}
            </div>

            {/* <PaginationComp/> */}
          </div>

          <div className="col-xl-3">
            {/* <FollowBlog /> */}

            {/* <BlogSearch /> */}

            {/* <BlogCategories /> */}

            {/* <BlogContact /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
