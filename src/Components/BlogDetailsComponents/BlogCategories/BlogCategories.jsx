import React from 'react'
import { blogCategories } from '../../../data'
import { Link } from 'react-router-dom';
import './BlogCategories.css'

const BlogCategories = () => {
  return (
    <div className='blog-box'>

        <h3>Categories</h3>

        {blogCategories.map(({name, count}, idx) =>
        
        <Link className="category-box d-flex align-items-center justify-content-between" key={idx}>
            <span>{name}</span>
            {count< 10? <span>0{count}</span> : <span>{count}</span> }

        </Link>
        )}
    </div>
  )
}

export default BlogCategories