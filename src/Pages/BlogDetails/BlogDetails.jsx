import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import BlogContent from "../../Components/BlogDetailsComponents/BlogContent/BlogContent";
import Tags from "./../../Components/BlogDetailsComponents/Tags/Tags";
import Comments from "../../Components/Comments/Comments";
import CommentForm from "../../Components/Comments/CommentForm/CommentForm";

// Icons
import BlogAdmin from "../../Components/BlogDetailsComponents/BlogAdmin/BlogAdmin";
import FollowBlog from "../../Components/BlogDetailsComponents/FollowBlog/FollowBlog";
import BlogSearch from "../../Components/BlogDetailsComponents/BlogSearch/BlogSearch";
import RecentBlogs from "../../Components/BlogDetailsComponents/RecentBlogs/RecentBlogs";
import BlogContact from "../../Components/BlogDetailsComponents/BlogContact/BlogContact";
import { blogsContent } from "../../data";

import "./BlogDetails.css";
import axios from "axios";
import { fetchComments } from "../../Slices/blog/comments";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const BlogDetails = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const [blog, setblog] = useState([]);
  const [data, setData] = useState(0);
  const [comments, setcomments] = useState([]);
// console.log(slug);
  const handleDataChange = (newData) => {
    if (newData == "update") {
      getdata2();
    }
    // console.log(newData);
  };
  // let dispatch=useDispatch()
  const getdata2 = async () => {
    // console.log(blog);
    try {
      await axios.get("api/v3/comments/?blog=" + blog.id).then((res) => {
        // console.log(res.data);
        setcomments(res.data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const getdata = async () => {
    try {
      await axios.get("api/v3/blogs/"+slug).then((res) => {
        // console.log(res.data);
        setblog(res.data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  useEffect(() => {

    getdata2();
  }, [blog]);

  return (
    <section className="blog-details">
      <div className="section-bg">
        <div>
          <h1>{t('Blog-Details')}</h1>
          <div className="d-flex justify-content-around">
          <Link to="/">{t('home')}</Link>
          <Link to="/blogs">{t('Blog-Page')}</Link>
          {/* <span> {t('')} </span> */}
          </div>
        </div>
      </div>

      <div className="blog-details-container">
        <div className="row justify-content-between">
          <div className="col-lg-8">
            {/* <BlogContent {...blogsContent[id]}/> */}
            {blog && <BlogContent detail={true} id={blog.id} {...blog} />}
            {/* <Tags/> */}
            <Comments
              commentsdata={comments}
              blog_id={blog.id}
              commentfor="blog"
            />
            <CommentForm
              onDataChange={handleDataChange}
              data={data}
              id={blog.id}
              commentfor="blog"
            />
          </div>
          <div className="col-lg-4 col-xl-3">
            {/* <BlogAdmin />
            <FollowBlog /> */}
            {/* <BlogSearch/> */}
            {/* <RecentBlogs/> */}
            {/* <BlogContact/> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
