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
    

    <h2 className='text-center m-0'>{t(title)}</h2>
    {desc && <p className='text-center'>{t(desc)}</p>}
    <div className="d-flex justify-content-around align-items-center justify-content-lg-between  w-100">
        <div className= {`rounded-circle card-img-box`}>
            <ImageComp src={img} alt={title}/>
        </div>


    </div>
    
</div>
  )
}

export default ExpertTeacherCard