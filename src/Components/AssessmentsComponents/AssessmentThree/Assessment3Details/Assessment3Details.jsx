import React from 'react'
import { FaCheck } from "react-icons/fa6";

import './Assessment3Details.css'
import { ass3Directions, ass3EvaluationTable, ass3Questions, classRoomInstruments } from '../../../../data';
import AssessmentTable from '../AssessmentTable/AssessmentTable';
import EvaluationTable from '../../EvaluationTable/EvaluationTable';

const Assessment3Details = () => {

    return (

    <div className='ass3-details'>

        <h2 className='mb-4'>Classroom Observation Instruments</h2>
        
        <h3 className='px-0 px-lg-4 large-mb'>Using Competency-Based Assessment to Drive Teacher Excellence</h3>

        <p className='special-p'>
            There is no one method will sufficiently answer all critical educational questions. Multiple measures or indicators of teaching are needed to help capture a more comprehensive picture of what goes on in classrooms. Observation is one of the methods through which we assess the quality of teaching and learn how to develop further.
        </p>

        <p className='special-p'>
            Classroom Observation is a process by which a consultant sits in on one or more class sessions, records the instructor’s teaching practices and student actions, and then meets with the teacher to discuss the observations.
        </p>

        <p className='special-p'>
            The main purpose behind the classroom observation is to allow a teacher to get feedback from an objective, experienced observer and to involve in context-specific discussions about teaching with adviser.
        </p>

        <p className='special-p large-mb'>
            The process of observation and evaluation require a very high degree of professional ethics and objectivity. Effective peer observation requires training in observational and analytical skills.
        </p>

        <h2 className='large-mb'>Classroom Observation Instruments</h2>

        <p className='special-p'>
            There are several types of observational procedures that have been used to examine effective teaching (e.g., charts, rating scales, checklists, and narrative descriptions). Some of the widely used Classroom Observation Instruments:
        </p>

        <ul className='ps-4 mb-4'>
        
                <li className='d-flex mb-4'>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>Classroom Assessment Scoring System (CLASS) instrument</span>
                </li>
            
        </ul>

        <p className='special-p mb-4'>
            The Classroom Assessment Scoring System™ was developed by Robert Pianta at the University of Virginia, Curry School of Education, Center for Advanced Study of Teaching and Learning (CASTL).
        </p>

        <ul className='ps-4 med-mb'>

            {classRoomInstruments.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {desc} </span>
                </li>
            )}    
        </ul>

        <p className='special-p large-mb'>
            Both the SOS and the CISSAR were designed for elementary and secondary education settings and involve recording teachers’ and students’ overt behaviors for short periods at specified time intervals.
        </p>

        <h2 className='large-mb'>Example of a Classroom Observation Tool</h2>

        <p className='special-p'>
            Directions:
        </p>

        <ul className='ps-4 med-mb'>

            {ass3Directions.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {desc} </span>
                </li>
                
            )}    
        </ul>

        {/* <Evaluation3 Table/> */}
        <EvaluationTable table={ass3EvaluationTable} />

        <AssessmentTable Questions={ass3Questions} adjustCell={true} btnName = 'Submit'/>

        
    </div>
)
}

export default Assessment3Details