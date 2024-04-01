import React from 'react'
import { FaCheck } from "react-icons/fa6";

import { ass4EvaluationTable, ass4Questions, ass4RatingIndicators, ass4Structure } from '../../../../data';
import EvaluationTable from '../../EvaluationTable/EvaluationTable';

import './Assessment4Details.css'
import AssessmentTable from '../../AssessmentThree/AssessmentTable/AssessmentTable';
import { useTranslation } from 'react-i18next';
const Assessment4Details = () => {
    const {t,i18n} = useTranslation()
    const lang = i18n.language;
    let isRTL = lang =='en'?'ltr':'rtl'
    return (
    <div className='ass4-details'>

        <h2 className='med-mb'>{t('ass4h2')}</h2>

        <p className='special-p'>
            {t('ass4p1')}
        </p>

        <ul className='ps-4 med-mb'>

            {ass4Structure.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {t(desc)} </span>
                </li>
            )}    
        </ul>

        <ul className='ps-5 med-'>

            {ass4RatingIndicators.map(({name, desc}, idx) =>

                <li className='mb-3' key={idx}>
                    <p className='special-p'> <span>{t(name)}</span><br></br> {t(desc)}</p>
                </li>
            )}

        </ul>

        <EvaluationTable table={ass4EvaluationTable}/>

        <AssessmentTable Questions={ass4Questions} adjustCell={true} btnName= 'Calculate'/>


    </div>
)
}

export default Assessment4Details