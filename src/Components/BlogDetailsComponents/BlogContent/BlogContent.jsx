import React from 'react'
import blogImg from '../../../assests/BlogDetails/Blog-Img.png'
import ImageComp from './../../ImageComp/ImageComp';

// Icons
import { PiUser } from "react-icons/pi";
import { AiOutlineComment } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { IoIosHeart } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { Link } from 'react-router-dom';

import './BlogContent.css'

const BlogContent = ({img, title, name, commentsNo, likesNo, desc, day, month, slice = false, blogId, id}) => {
return (

    
    <div className= {`blog-content position-relative ${slice&& 'pb-4'}`}>

        <ImageComp src={img} alt= {title}/>
        <div className="blog-desc px-3 bg-white">
            <h1>{title}</h1>
            <div className='blog-details bg-white'>
                <div>
                    <span><PiUser className='icon'/> {name} </span>
                    <span><AiOutlineComment className='icon'/> {commentsNo} Comments </span>
                    <span><SlLike className='icon'/> {likesNo} Likes </span>
                </div>
                <div>
                    <button> <IoIosHeart className='like'/> </button>
                </div>
            </div>

            {slice? <p>{desc.slice(0, 200)}...</p> : <p>{desc}</p>}
            
            {slice && <Link className='d-flex align-items-center justify-content-end darkgreen-color fw-bold'  to={`/blogdetails/${blogId}`}>Read More <IoArrowForward className='ms-3' /></Link>}
{/* <Link className=' text-decoration-none ' to={`/blogdetails/${blog?.id}`}> */}

        </div>

        <div className="blog-content-date">
            <span>{day}</span> <span>{month}</span>
        </div>
    </div>
)
}

export default BlogContent