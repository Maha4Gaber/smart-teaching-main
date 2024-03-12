import React from 'react'
import { FaCheck } from "react-icons/fa6";


import './Assessment5Details.css'
import { ass3Questions, ass5EvaluationTable, ass5QuestionsPartOne, ass5QuestionsPartOneTitles, ass5QuestionsPartTwo, ass5QuestionsPartTwoTitles, ass5StudentPerspectives } from '../../../../data';
import EvaluationTable from '../../EvaluationTable/EvaluationTable';
import AssessmentTable from './../../AssessmentThree/AssessmentTable/AssessmentTable';
const Assessment5Details = () => {

return (
    <div className='ass5-details'>

        <h2 className='mb-4'>Student Surveys</h2>

        <h3 className='high-mb'>Students Rating their Teacher</h3>

        <p className='special-p'>
            Research found that teachers’ student survey results are predictive of student achievement gains. It is also found that student surveys produce more consistent results than classroom observations or achievement gain measures.
        </p>

        <p className='special-p high-mb'>
            Bill & Melinda Gates Foundation (2012). MET project, Research Report “Asking Students about Teaching Student Perception Surveys and Their Implementation.
        </p>

        <h2 className='high-mb text-start'>TRIPOD PROJECT</h2>

        <p className='special-p med-mb'>
            The most prominent off-the-shelf student perception survey in K-12 education is the Tripod Project survey. The Tripod survey was originally developed by Harvard researcher Ron Ferguson, and has since received extensive support from the Bill & Melinda Gates Foundation’s Measure of Effective Teaching (MET) Project.
        </p>

        <p className='special-p'>
            Student perspectives can help guide:
        </p>

        <ul className='ps-4 high-mb'>

            {ass5StudentPerspectives.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {desc} </span>
                </li>
            )}    
        </ul>

        <p className='special-p'>
            Ronald Ferguson, Tripod Classroom-Level Student Perceptions as Measures of Teaching Effectiveness. 2011
        </p>

        <p className='special-p'>
            The Tripod questions are gathered under seven headings, or constructs, called the Seven C’s. The seven constructs are: Care, Control, Clarify, Challenge, Captivate, Confer and Consolidate. Within each construct, there are a number of statements that the student is asked to rate based on a five (or four) point Likert scale of agreement. The surveys vary by age group
        </p>

        <p className='special-p'>
            The following table shows examples of items used to measure each of the Seven C’s based on a four point Likert scale. as follows
        </p>

        <EvaluationTable table={ass5EvaluationTable}/>

        <h3 className='high-mb'>Tripod Survey Sample Questions</h3>

        <AssessmentTable  Questions={ass5QuestionsPartOne} columnHead={ass5QuestionsPartOneTitles} btnName= 'Calculate'/>
        
        <p className='special-p mt-4 med-mb overflow-x-hidden'>
            Source: Bill & Melinda Gates Foundation. “Learning About Teaching: Initial Findings from the Measures of Effective Teaching Project (Research Paper).” December 2010, p. 9. <br/>
            <a className=' text-dark text-decoration-underline' href=" "> http://www.metproject.org/downloads/Preliminary_FindingsResearch_Paper.pdf</a>
        </p>

        <p className='special-p'>
            The following survey questions adapted from Ron Ferguson’s Tripod Project 2011
        </p>

        <EvaluationTable table={ass5EvaluationTable}/>

        <div className='mb-4'></div>

        <AssessmentTable Questions={ass5QuestionsPartTwo} tableName={ass5QuestionsPartTwoTitles} adjustCell={true} btnName= 'Submit'/>

        






    </div>
)
}

export default Assessment5Details