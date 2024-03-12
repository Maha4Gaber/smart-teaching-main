import React from 'react'
import { Link } from 'react-router-dom';
import { blogsContent } from '../../data';
import BlogContent from '../../Components/BlogDetailsComponents/BlogContent/BlogContent';

import FollowBlog from '../../Components/BlogDetailsComponents/FollowBlog/FollowBlog';
import BlogSearch from '../../Components/BlogDetailsComponents/BlogSearch/BlogSearch';
import BlogContact from '../../Components/BlogDetailsComponents/BlogContact/BlogContact';
import BlogCategories from '../../Components/BlogDetailsComponents/BlogCategories/BlogCategories';
import PaginationComp from './../../Components/PaginationComp/PaginationComp';

import './Blogs.css';
const Blogs = () => {

    return (
    <section className='blog-page'>

        <div className="section-bg">

            <div>

                <h1>Blog Page</h1>
                <div className='d-flex justify-content-around'>
                    <Link to= '/'>Home</Link>
                    <span> Blog Page </span>
                </div>

            </div>

        </div>

        <div className="blog-page-container">

            <div className="row">

                <div className="col-xl-9">

                    <div className="row gy-4">

                        {blogsContent.map((blog, idx) =>
                            
                            <div className="col-md-6" key={idx}>
                                
                                    <BlogContent {...blog} slice={true} blogId={blog.id} />
                                

                            </div>
                        

                        )}

                    </div>

                    <PaginationComp/>

                </div>

                <div className="col-xl-3">

                    <FollowBlog/>

                    <BlogSearch/>

                    <BlogCategories/>

                    <BlogContact/>

                </div>

            </div>
            
        </div>

    </section>
)
}

export default Blogs