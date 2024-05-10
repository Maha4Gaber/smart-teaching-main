import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import BlogContent from '../../Components/BlogDetailsComponents/BlogContent/BlogContent';
import Tags from './../../Components/BlogDetailsComponents/Tags/Tags';
import Comments from '../../Components/Comments/Comments';
import CommentForm from '../../Components/Comments/CommentForm/CommentForm';

// Icons
import BlogAdmin from '../../Components/BlogDetailsComponents/BlogAdmin/BlogAdmin';
import FollowBlog from '../../Components/BlogDetailsComponents/FollowBlog/FollowBlog';
import BlogSearch from '../../Components/BlogDetailsComponents/BlogSearch/BlogSearch';
import RecentBlogs from '../../Components/BlogDetailsComponents/RecentBlogs/RecentBlogs';
import BlogContact from '../../Components/BlogDetailsComponents/BlogContact/BlogContact';
import { blogsContent } from '../../data';

import './BlogDetails.css'
import axios from 'axios';

const BlogDetails = () => {

    const { id } = useParams();
    const [blog, setblog] = useState([]);

    useEffect(() => {
        const getdata = async () => {
            try {
                await axios.get("api/v3/blogs/"+id).then((res) => {
                // console.log(res.data);
                setblog(res.data)
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
    <section className='blog-details'>
        <div className="section-bg">
            <div>
                <h1>Blog Details</h1>
                <div className='d-flex justify-content-around'>
                    <Link to= '/'>Home</Link>
                    <span> Blog Details </span>
                </div>
            </div>
        </div>

        <div className="blog-details-container">
            <div className="row justify-content-between">
                <div className="col-lg-8">
                    {/* <BlogContent {...blogsContent[id]}/> */}
                    <BlogContent id={id} {...blog} />
                    <Tags/>
                    <Comments id={id} commentfor='blog'/>
                    <CommentForm id={id} commentfor='blog'/>
                </div>
                <div className="col-lg-4 col-xl-3">

                    <BlogAdmin/>
                    <FollowBlog/>
                    <BlogSearch/>
                    <RecentBlogs/>
                    <BlogContact/>
                </div>
            </div>
        </div>
    </section>
)
}

export default BlogDetails