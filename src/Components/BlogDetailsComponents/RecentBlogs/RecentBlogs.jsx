import React from 'react'
import { Link } from 'react-router-dom';
import './RecentBlogs.css'
import { recentBlogs } from '../../../data';
import RecentBlog from '../RecentBlog/RecentBlog';

const RecentBlogs = () => {
return (
    <div className='blog-box recent-blogs'>
        <div className='d-flex align-items-center justify-content-between blogs-head'>
            <h3 className='m-0'>Recent Post</h3>
            <Link className='more' to= '/blogs'> More Blogs...</Link>
        </div>

        {recentBlogs.map ((blog, idx) => 
            <RecentBlog {...blog} key={idx}/>
        )}
    </div>
)
}

export default RecentBlogs