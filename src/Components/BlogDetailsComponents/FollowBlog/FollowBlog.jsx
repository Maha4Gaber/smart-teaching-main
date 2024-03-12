import React from 'react'
import { blogIcons } from '../../../data'
import SocialLogo from '../SocialLogo/SocialLogo'
import './FollowBlog.css'

const FollowBlog = () => {
return (

    <div className='blog-box follow-blog'>
        <h3>Follow Us</h3>

        <div className='d-flex align-items-center '>
            {blogIcons.map(({icon}, idx) => 
        
                <SocialLogo icon={icon} key={idx}/>
            )}
        </div>

    </div>
)
}

export default FollowBlog