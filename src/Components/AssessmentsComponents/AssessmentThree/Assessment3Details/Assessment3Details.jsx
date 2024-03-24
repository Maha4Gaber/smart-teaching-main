import React from 'react'
import { FaCheck } from "react-icons/fa6";

import './Assessment3Details.css'
import { ass3Directions, ass3EvaluationTable, ass3Questions, classRoomInstruments } from '../../../../data';
import AssessmentTable from '../AssessmentTable/AssessmentTable';
import EvaluationTable from '../../EvaluationTable/EvaluationTable';
import { useTranslation } from 'react-i18next';

const Assessment3Details = () => {
    const {t,i18n} = useTranslation()
    const lang = i18n.language;
    let isRTL = lang =='en'?'ltr':'rtl'
    return (

    <div className='ass3-details'>

        <h2 className='mb-4'>{t('ass3h2')}</h2>
        
        <h3 className='px-0 px-lg-4 large-mb'>{t('ass3h3')}</h3>

        <p className='special-p'>
            {t('ass3p1')}
        </p>

        <p className='special-p'>
            {t('ass3p2')}
        </p>

        <p className='special-p'>
            {t('ass3p3')}
        </p>

        <p className='special-p large-mb'>
            {t('ass3p4')}
        </p>

        <h2 className='large-mb'>{t('ass3h22')}</h2>

        <p className='special-p'>
            {t('ass3p5')}
        </p>

        <ul className='ps-4 mb-4'>
        
                <li className='d-flex mb-4'>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>{t('ass3span')}</span>
                </li>
            
        </ul>

        <p className='special-p mb-4'>
        {t('ass3p6')}
        </p>

        <ul className='ps-4 med-mb'>

            {classRoomInstruments.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {t(desc)} </span>
                </li>
            )}    
        </ul>

        <p className='special-p large-mb'>
            {t('ass3p7')}
        </p>

        <h2 className='large-mb'>{t('ass3h23')}</h2>

        <p className='special-p'>
            {t('ass3p7')}
        </p>

        <ul className='ps-4 med-mb'>

            {ass3Directions.map(({desc}, idx) => 
            
                <li className='d-flex mb-4' key={idx}>
                    <span className='simple-icon'><FaCheck/></span>
                    <span className='mx-2'></span>
                    <span className = 'desc'> {t(desc)} </span>
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