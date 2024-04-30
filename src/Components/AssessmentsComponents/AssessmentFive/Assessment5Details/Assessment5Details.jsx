import React from 'react'
import { FaCheck } from "react-icons/fa6";


import './Assessment5Details.css'
import {  ass5EvaluationTable, ass5QuestionsPartOne, ass5QuestionsPartOneTitles, ass5QuestionsPartTwo, ass5QuestionsPartTwoTitles, ass5StudentPerspectives } from '../../../../data';
import EvaluationTable from '../../EvaluationTable/EvaluationTable';
import AssessmentTable from './../../AssessmentThree/AssessmentTable/AssessmentTable';
import { useTranslation } from "react-i18next";
import Stepper from '../../../Stepper/Stepper';
const Assessment5Details = () => {
    const {t,i18n} = useTranslation()
    const lang = i18n.language;
    let isRTL = lang =='en'?'ltr':'rtl'
return (
    <div className='ass5-details'>

        <h2 className='mb-4'>{t('ass5h2')}</h2>

        <h3 className='high-mb '>{t('ass5h3')}</h3>

        <p className='special-p'>
        {t('ass5p1')}
        </p>

        <p className='special-p high-mb'>
        {t('ass5p2')}
        </p>

        <h2 className='high-mb '>{t('ass5h22')}</h2>

        <p className='special-p med-mb'>
        {t('ass5p3')}
        </p>

        <p className='special-p'>
        {t('ass5p4')}
        </p>

        <ul className='ps-4 high-mb'>

            {ass5StudentPerspectives.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {t(desc)} </span>
                </li>
            )}    
        </ul>

        <p className='special-p'>
        {t('ass5p5')}
        </p>

        <p className='special-p'>
        {t('ass5p6')}
        </p>

        <p className='special-p'>
        {t('ass5p7')}
        </p>

        {/* <EvaluationTable table={ass5EvaluationTable}/> */}
        <div className=" m-5">
</div>
        <h3 className='high-mb'>{t('ass5h33')}</h3>
        <div className=" m-5">

        <AssessmentTable  Questions={ass5QuestionsPartOne} columnHead={ass5QuestionsPartOneTitles} btnName= 'Calculate'/>
        </div>
        <p className='special-p mt-4 med-mb overflow-x-hidden'>
        {t('ass5p8')}<br/> <a className=' text-dark text-decoration-underline' href=''> http://www.metproject.org/downloads/Preliminary_FindingsResearch_Paper.pdf</a>
        </p>

        <p className='special-p'>
        {t('ass5p9')}
        </p>
        <div className=" m-5">
        <Stepper Questions={ass5QuestionsPartTwo} tableName={ass5QuestionsPartTwoTitles} />
        </div>

        {/* <EvaluationTable table={ass5EvaluationTable}/> */}

        {/* <div className='mb-4'></div> */}

        {/* <AssessmentTable Questions={ass5QuestionsPartTwo} tableName={ass5QuestionsPartTwoTitles} adjustCell={true} btnName= 'Submit'/> */}



    </div>
)
}

export default Assessment5Details