import React from 'react'
import { FaCheck } from "react-icons/fa6";

import { ass4EvaluationTable, ass4Questions, ass4RatingIndicators, ass4Structure } from '../../../../data';
import EvaluationTable from '../../EvaluationTable/EvaluationTable';

import './Assessment4Details.css'
import AssessmentTable from '../../AssessmentThree/AssessmentTable/AssessmentTable';
const Assessment4Details = () => {

    return (
    <div className='ass4-details'>

        <h2 className='med-mb'>Simplified Teachers Competency Assessment (TCA)</h2>

        <p className='special-p'>
            Structure
        </p>

        <ul className='ps-4 med-mb'>

            {ass4Structure.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {desc} </span>
                </li>
            )}    
        </ul>

        <ul className='ps-5 med-'>

            {ass4RatingIndicators.map(({name, desc}, idx) =>

                <li className='mb-3' key={idx}>
                    <p className='special-p'> <span>{name}</span> {desc}</p>
                </li>
            )}

        </ul>

        <EvaluationTable table={ass4EvaluationTable}/>

        <AssessmentTable Questions={ass4Questions} adjustCell={true} btnName= 'Calculate'/>


    </div>
)
}

export default Assessment4Details