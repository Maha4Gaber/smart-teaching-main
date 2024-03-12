import React from 'react'
import ImageComp from '../../../ImageComp/ImageComp'

import { FaCheck } from "react-icons/fa6";
import img1 from '../../../../assests/Assessments/Assessment2/sidebar-1.png'
import img2 from '../../../../assests/Assessments/Assessment2/sidebar-2.png'
import img3 from '../../../../assests/Assessments/Assessment2/sidebar-3.png'


import { assTwoSidebar1, assTwoSidebar2 } from '../../../../data';
import { Link } from 'react-router-dom';

import './Assessment2Sidebar.css'

const Assessment2Sidebar = () => {

    return (
    <aside className='ass2-sidebar p-3'>
        
        <div className='d-flex justify-content-center mb-4'>
            <div className='ass2-side-img'>
                <ImageComp src={img1} />
            </div>
        </div>

        <h3>Teacher Competency Assessment <br/> (TCA)</h3>

        <ul className='ps-1 mb-4'>

            {assTwoSidebar1.map(({desc}, idx) => 
            
                <li className='d-flex' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {desc} </span>
                </li>
            )}    
        </ul>

        <h3>There are two versions of TCA:</h3>

        <ul className='ps-1'>

            <li className='d-flex'>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> The full version (112 items and 8 Domains) is only available for certified Expert Teachers. </span>
            </li>

        </ul>

        <div className='d-flex justify-content-center mb-4'>

            <Link className='ass2-side-img2'>

                <ImageComp src={img2} />

            </Link>

        </div>

        <h3>Simplified Teacher Competency Assessment</h3>

        <p>
            The Simplified TCA assessment tool is made up of 19 items (Indicators) and 8 Domains.
        </p>

        <div className='d-flex justify-content-center mb-4'>

            <Link className='ass2-side-img2'>

                <ImageComp src={img3} />

            </Link>

        </div>

        <h3>Teachers Self-assessment</h3>

        <p>Self-assessment is a powerful technique for improving achievement. Provision of a self-assessment tool contributed to teacher growth by:</p>
        
        <ul className='ps-1'>

            {assTwoSidebar2.map(({desc}, idx) => 
            
                <li className='d-flex' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {desc} </span>
                </li>
            )}    
        </ul>

        <p>Providing a self-assessment tool is a constructive strategy for improving the effectiveness of in-service provided it is supported with other professional growth strategies: peer coaching, observation by external change agents, and focused input on teaching strategies.</p>
    </aside>
)
}

export default Assessment2Sidebar