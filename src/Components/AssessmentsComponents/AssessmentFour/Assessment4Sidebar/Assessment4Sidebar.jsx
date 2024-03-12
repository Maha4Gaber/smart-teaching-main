import React from 'react'

import { FaCheck } from "react-icons/fa6";
import ImageComp from '../../../ImageComp/ImageComp'
import img1 from '../../../../assests/Assessments/Assessment4/classroom_observ 1.png'
import img2 from '../../../../assests/Assessments/Assessment4/btn_1.png'

import { ass4Sidebar } from '../../../../data'
import { Link } from 'react-router-dom';
import './Assessment4Sidebar.css'

const Assessment4Sidebar = () => {

return (
    <aside className='ass4-sidebar p-4'>

        <div className='d-flex justify-content-center mb-4'>
            <div className='ass4-side-img'>
                <ImageComp src={img1} />
            </div>
        </div>

        <h3>Simplified Version of Teacher <br/> Competency Assessment (TCA)</h3>

        <ul className='ps-4 med-mb'>

            {ass4Sidebar.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {desc} </span>
                </li>
            )}    
        </ul>

        <Link className='d-flex justify-content-center' to= '/TeacherCompetencyAssessment'>
            <ImageComp src={img2}/>
        </Link>

    </aside>
)
}

export default Assessment4Sidebar