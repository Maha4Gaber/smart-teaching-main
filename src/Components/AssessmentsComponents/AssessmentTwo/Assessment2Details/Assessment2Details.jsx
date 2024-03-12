import React from 'react'
import ImageComp from '../../../ImageComp/ImageComp'


import img1 from '../../../../assests/Assessments/Assessment2/details1.png'
import btn1 from '../../../../assests/Assessments/Assessment2/btn-1.png'
import btn2 from '../../../../assests/Assessments/Assessment2/btn-2.png'

import { FaCheck } from "react-icons/fa6";

import './Assessment2Details.css'
import { assTwoTeacherDomain, teacherCompetencies, teacherCompetencies2 } from '../../../../data';
import Assessment2Table from '../Assessment2Table/Assessment2Table';
import { Link } from 'react-router-dom';

const Assessment2Details = () => {

return (

    <div className='ass2-details'>

        <h2 className='mb-4'>Teachers Competency Assessment (TCA)</h2>
        
        <h3 className='px-0 px-lg-5 mb-4'>Web-Based Self- and Peer-Assessment of Teachers’ Competencies Using Competency-Based Evaluation to Drive Teacher Excellence</h3>
        
        <div className='text-center mb-4 first-img'>
            <ImageComp src={img1} alt= 'Teacher Assessment'/>
        </div>

        <p className='special-p'>
            Research shows that there is a substantial amount of common content across the different approaches. Almost all of the systems we reviewed have substantial content related to the following teaching competencies: instructional planning, classroom management, interactions with others (staff, parents), and professionalism.
        </p>

        <p className='special-p mb-4'>
            There is general consensus in the research that teaching competencies can be grouped into three main categories:
        </p>

        <ul className='ps-4'>
        
                <li className='d-flex mb-4'>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>Content Expertise</span>
                </li>

                <li className='d-flex mb-4'>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>Instructional Design</span>
                </li>

                <li className='d-flex mb-4'>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>Instructional Delivery</span>
                </li>
            
        </ul>

        <p className='special-p mb-4'>
            Research indicates that excellent teaching consists of a number of competencies related to content expertise, instructional design, and instructional delivery, as well as interpersonal traits such as helpfulness, friendliness, and open mindedness.
        </p>

        <p className='special-p large-mb'>
            Our Teachers Competency Assessment (TCA) model, is about much more than creating a rating – it is about giving teachers opportunities to improve through specific and ongoing feedback.
        </p>

        <h2 className='med-mb'>Structure of the Teachers Competency Assessment <br/> (TCA)</h2>

        <p className='special-p large-mb'>
            Descriptors: Performance descriptors are observable and measurable statements of teacher actions and behaviors aligned to each element and serve as the basis for identifying the level of teaching or administrative performance in one of four categories: Low level, Fair level, Satisfactory level and High level
        </p>

        <h2 className='med-mb'>Teacher Competency Domains</h2>

        <p className='special-p med-mb'>
            The TCA competency model specifies key performance domains, and within each domain are the specific behaviour indicators. The competency model is organised around the following eight domains covering all aspects of a teacher’s job performance:
        </p>

        <div className="row">
            <div className="col-md-6">
                <ul className='m-0 ps-4'>
                    {assTwoTeacherDomain.map(({desc}, idx) =>
                        <li key={idx} className='d-flex mb-4'>
                        <span className='simple-icon'><FaCheck/></span>
                        <span className='mx-2'></span>
                        <span className = 'desc'>{desc}</span>
                    </li>
                    )}
                </ul>
            </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="domain-img w-100">

                </div>
                
            </div>

        </div>

        <p className='special-p large-mb'>These competencies are the basis for making actual assessments of teacher performance. The assessments will yield information of suggested areas for improvement.</p>
        
        <h2 className='med-mb'>Behavior Indicators</h2>

        <p className='special-p large-mb'>
            Each of the above domains has a number of indicators. Indicators are observable and measurable statements that provide evidence of the application of knowledge and skills in practice. These may be visible during individual lessons or over the course of the year. In turn, the information can be used as an input to an individual professional development plan (IPDP).
        </p>

        <h2 className='med-mb'>Elements</h2>

        <p className='special-p large-mb'>
            The elements are more specific descriptions of actions and behaviors related to each Indicator. The elements further break down the Indicators into more specific aspects of educator practice and provide an opportunity for evaluators to offer detailed feedback that serves as a roadmap for improvement.
        </p>

        <h2 className='med-mb'>Levels of Performance</h2>

        <p className='special-p med-mb'>
            The TCA model identifies what each indicator looks like in practice at four levels of Performance Standard Index (PSI) with each performance level populated with a percentage range as shown below.
        </p>

        <Assessment2Table/>

        <p className='special-p large-mb'>
            Teachers and other staff at the school should clearly understand the meaning of these ratings. And they should discuss, with their peers, supervisors and principals, if there is a need to clarify what is expected of them at the school.
        </p>

        <h2 className='med-mb'>Uses of Teacher Competencies</h2>

        <p className='special-p'>The teacher competencies may be used in several ways.</p>

        <ul className='ps-4 med-mb'>

            {teacherCompetencies.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {desc} </span>
                </li>
            )}    
        </ul>

        <p className='special-p'>The teacher competency Assessment will be useful to many different groups within an educational system, including:</p>

        <ul className='ps-4 large-mb'>

            {teacherCompetencies2.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {desc} </span>
                </li>
            )}    
        </ul>

        <h2 className='med-mb'>Individual Professional Development Plan <br/> (IPDP)</h2>

        <p className='special-p med-mb'>
            Teachers must document the IPDP and share them with their administrator. By completing the IPDP at the start of the year, teachers and administrators. The IPDP or will serve as a reference document for, discussions and professional development throughout the year.
        </p>

        <div className='row mb-4'>
            <div className="col-md-8 d-flex align-items-center">
                <p className='special-p m-0'>
                    To learn more about Individual Professional Development Plan (IPDP) click the following button:
                </p>
            </div>
            <Link className="col-md-4 btn-img text-center">
                <ImageComp src= {btn1} alt= 'Click Now'/>     
            </Link>
        </div>

        <div className='row'>
            <div className="col-md-8 d-flex align-items-center">
                <p className='special-p m-0'>
                    To take the Teacher Competency Assessment. (for registered Expert Teachers only) Click the following button
                </p>
            </div>
            <Link className="col-md-4 btn-img text-center">
                <ImageComp src= {btn2} alt= 'Click Now'/>     
            </Link>
        </div>

    </div>

)
}

export default Assessment2Details