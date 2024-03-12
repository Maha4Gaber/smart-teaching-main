import React from 'react'
import './Tags.css'
import { Link } from 'react-router-dom';

//  Icons
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";




const Tags = () => {

return (
    <div className='tags d-flex align-items-center justify-content-between'>

        <div className='d-flex align-items-center tag-links'>
            <h4 className='d-inline-block'> Tag</h4>
            <Link className='mx-1'>Business</Link>
            <Link className='mx-1'>Design</Link>
            <Link className='mx-1'>Apps</Link>
            <Link className='mx-1'>Data</Link>
        </div>
        <div className='d-flex align-items-center social-tag'>
            <h4 className='d-inline-block'> Share</h4>
            <Link className='mx-1'> <FaXTwitter/> </Link>
            <Link className='mx-1'> <FaFacebookF/> </Link>
            <Link className='mx-1'> <IoLogoInstagram/> </Link>
        </div>
        
    </div>
)
}

export default Tags