import React from 'react'
import { Link } from 'react-router-dom'
import ImageComp from './../../ImageComp/ImageComp';
import './RecentBlog.css'

const RecentBlog = ({img, title, date, desc}) => {

    return (
    <Link className='recent-blog d-flex'>
        <div className='recent-blog-img'>
            <ImageComp src={img} alt={title}/>
        </div>
        <div className='ms-3 me-1'></div>
        <div className="recent-blog-details d-flex flex-column justify-content-around">
            <div className="recent-blog-date">{date}</div>
            <div className='recent-blog-desc'>{desc}</div>
        </div>
    </Link>
)
}

export default RecentBlog