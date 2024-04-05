import React from 'react'
import './BgImg.css'
import ImageComp from '../ImageComp/ImageComp'

const BgImg = ({src='', alt='', className=''}) => {
  return (
    
      <ImageComp  src={src} alt={alt}/>
    

  )
}

export default BgImg