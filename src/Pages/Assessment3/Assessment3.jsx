import React, { useEffect } from 'react'
import SidebarLinks from '../../Components/SidebarLinks/SidebarLinks'
import { expertTeacherLinks } from '../../data'
import Assessment3Details from '../../Components/AssessmentsComponents/AssessmentThree/Assessment3Details/Assessment3Details'
import Assessment3Sidebar from './../../Components/AssessmentsComponents/AssessmentThree/Assessment3Sidebar/Assessment3Sidebar';

import './Assessment3.css'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
const Assessment3 = () => {
    const {t,i18n} = useTranslation()
    const lang = i18n.language;
    let isRTL = lang =='en'?'ltr':'rtl'
    let navigate =useNavigate()
        // if (!localStorage.user_data) {navigate('/login')}
        useEffect(() => {
        if (localStorage.user_data & localStorage.user_data =='null') {navigate('login')}
        
    }, []);
return (
    
    <div>
    <figure className='main-ass3-img main-img d-flex align-items-center '>
        <figcaption>
        
            <h1 className='med-mb'>{t('ass3h2')}
            <h4>{t('ass3tool')}</h4></h1>
            
        </figcaption>
    </figure>

    <div className="ass3 p-md-5">

        <div className="row gy-4 ">

            <div className="col-lg-3 px-3 g-3">

                <SidebarLinks links={expertTeacherLinks}/>
                <Assessment3Sidebar />

            </div>

            <div className="col-lg-9 px-3">

                <Assessment3Details/>

            </div>

            {/* <div className="col-lg-3 px-3">
                
                
            </div> */}

        </div>

    </div>
    </div>
)
}

export default Assessment3