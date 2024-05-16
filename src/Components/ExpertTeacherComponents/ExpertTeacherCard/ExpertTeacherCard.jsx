import React from 'react'
import parse from 'html-react-parser';
import { FaCheck } from "react-icons/fa6";
import ImageComp from './../../ImageComp/ImageComp';

import './ExpertTeacherCard.css'
import { useTranslation } from 'react-i18next';
const ExpertTeacherCard = ({img, id, title, desc= null, className= null}) => {
  const {t} = useTranslation()
  return (
    
    <div className={`expert-teacher-card ${className}`}>
    {desc && <p className=''>{t(desc)}</p>}
    <div className="d-flex justify-content-around align-items-center justify-content-lg-between  w-100">
        <div className= {`rounded-circle card-img-box`}>
        <img src={img} alt={title}/>
            {/* <ImageComp src={img} alt={title}/> */}
        </div>
      </div>
    <div className=' hhhh2'>{t(title)}</div>
    
</div>
  )
}

export default ExpertTeacherCard