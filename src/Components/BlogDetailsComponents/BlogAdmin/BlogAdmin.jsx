import React from 'react'
import ImageComp from './../../ImageComp/ImageComp';
import logo from '../../../assests/BlogDetails/Logo.png'
import SocialLogo from '../SocialLogo/SocialLogo';
import { blogIcons } from '../../../data';
import './BlogAdmin.css'

const BlogAdmin = () => {
  return (
    <div className='blog-box blog-admin'>
        <div className="blog-admin-img mx-auto">
            <ImageComp src={logo} alt= 'Logo'/>
        </div>

        <h2>Admin</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate vestibulum</p>

        <div className='d-flex align-items-center justify-content-around'>
            {blogIcons.map(({icon}, idx) => 
        
                <SocialLogo icon={icon} key={idx}/>
            )}
        </div>
    </div>
  )
}

export default BlogAdmin