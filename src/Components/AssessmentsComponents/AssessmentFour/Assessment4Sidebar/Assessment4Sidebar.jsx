import React from 'react'

import { FaCheck } from "react-icons/fa6";
import ImageComp from '../../../ImageComp/ImageComp'
import img1 from '../../../../assests/Assessments/Assessment4/classroom_observ 1.png'
// import img2 from '../../../../assests/Assessments/Assessment4/btn_1.png'

import { ass4Sidebar } from '../../../../data'
import { Link } from 'react-router-dom';
import './Assessment4Sidebar.css'
import { useTranslation } from 'react-i18next';
import Btn from '../../../Btn/Btn';
import img2 from '../../../../assests/Assessments/Assessment2/sidebar-1.png'
// img2

const Assessment4Sidebar = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
    let isRTL = lang == "en" ? "ltr" : "rtl";
return (
    <aside className='ass4-sidebar p-4 mt-5'>

        <div className='d-flex justify-content-center mb-4'>
            <div className='side-img'>
                <ImageComp src={img1} />
            </div>
        </div>

        <h3>{t('ass4Sidh31')} </h3>

        <ul className='ps-4 med-mb'>

            {ass4Sidebar.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-1'></span>
                    <span className = 'desc'> {t(desc)} </span>
                </li>
            )}    
        </ul>

        <Link className='d-flex justify-content-center' to= '/TeacherCompetencyAssessment'>
            <Btn img={img2} text={'TCA'} />
            {/* <ImageComp src={img2}/> */}
        </Link>

    </aside>
)
}

export default Assessment4Sidebar