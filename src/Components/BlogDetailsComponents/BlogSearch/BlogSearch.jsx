import React from 'react'
import { CiSearch } from "react-icons/ci";
import './BlogSearch.css'
import { useTranslation } from 'react-i18next';

const BlogSearch = () => {
  const {t, i18n} = useTranslation()
  const lang = i18n.language

  return (
    <div className='blog-box'>
        <h3>Search Here</h3>
        <div className="form-floating">

                    <input
                    type="text"
                    className="form-control"
                    id="floatingSearch"
                    name="search"
                    placeholder='Search'
                    />
                    
                    {/* Label */}
                    <label
                    className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                    htmlFor="floatingSearch"
                    >
                        search
                    </label>

                    <span><CiSearch/></span>

                </div>
    </div>
  )
}

export default BlogSearch