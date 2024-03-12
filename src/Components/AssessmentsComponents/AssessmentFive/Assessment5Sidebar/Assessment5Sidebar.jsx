import React from 'react'

import { FaCheck } from "react-icons/fa6";
import ImageComp from '../../../ImageComp/ImageComp'
import img1 from '../../../../assests/Assessments/Assessment5/classroom_observ 1.png'

import { ass5Sidebar } from '../../../../data'
import './Assessment5Sidebar.css'


const Assessment5Sidebar = () => {

return (
    <aside className='ass5-sidebar p-4'>

        <div className='d-flex justify-content-center mb-4'>
            <div className='ass5-side-img'>
                <ImageComp src={img1} />
            </div>
        </div>

        <h3>Student Perception Survey</h3>

        <ul className='ps-4 med-mb'>

            {ass5Sidebar.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {desc} </span>
                </li>
            )}    
        </ul>

    </aside>
)
}

export default Assessment5Sidebar