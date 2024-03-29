import React from 'react'
import SidebarLinks from '../../Components/SidebarLinks/SidebarLinks'
import { expertTeacherLinks } from '../../data'
import Assessment3Details from '../../Components/AssessmentsComponents/AssessmentThree/Assessment3Details/Assessment3Details'
import Assessment3Sidebar from './../../Components/AssessmentsComponents/AssessmentThree/Assessment3Sidebar/Assessment3Sidebar';

import './Assessment3.css'
import { useTranslation } from 'react-i18next';
const Assessment3 = () => {
    const {t,i18n} = useTranslation()
    const lang = i18n.language;
    let isRTL = lang =='en'?'ltr':'rtl'
return (
    
    <div>
    <figure className='main-ass3-img main-img d-flex align-items-center '>
        <figcaption>
            <h1 className='med-mb'>{t('ass3h2')}</h1>
            <h4>{t('ass3tool')}</h4>
        </figcaption>
    </figure>

    <div className="ass3 p-3 p-md-5">

        <div className="row gy-4 ">

            <div className="col-lg-3 px-3">

                <SidebarLinks links={expertTeacherLinks}/>

            </div>

            <div className="col-lg-6 px-3">

                <Assessment3Details/>

            </div>

            <div className="col-lg-3 px-3">
                
                <Assessment3Sidebar/>
                
            </div>

        </div>

    </div>
    </div>
)
}

export default Assessment3