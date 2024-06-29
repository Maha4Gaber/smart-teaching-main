import React, { useEffect } from 'react'
import SidebarLinks from '../../Components/SidebarLinks/SidebarLinks'
import { expertTeacherLinks } from '../../data'

import './Assessment5.css'
import Assessment5Details from '../../Components/AssessmentsComponents/AssessmentFive/Assessment5Details/Assessment5Details'
import Assessment5Sidebar from '../../Components/AssessmentsComponents/AssessmentFive/Assessment5Sidebar/Assessment5Sidebar'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Assessment5 = () => {
    const { t, i18n } = useTranslation();
    const lang = i18n.language;
  const userData = useSelector((state) => state.userData);
  let isRTL = lang == "en" ? "ltr" : "rtl";
    let navigate =useNavigate()
        // if (!localStorage.user_data) {navigate('/login')}
        useEffect(() => {
        if (userData.user_data.role !=='user') {
            // if(){

            // }
            console.log(userData.user_data.group);
            navigate('/login')
        }
        
    }, []);
return (
    <div>
    <figure className='main-ass5-img main-img d-flex align-items-center '>
        <figcaption>
            <h1 className=''>{t('ass5h1')}
            <h4>{t('ass5h4')}</h4>
            </h1>
            
        </figcaption>
    </figure>

    <section className=" ass5 py-3 py-md-4 ">

        <div className="row gy-4 ">

            <div className="col-lg-3 px-3">

                <div className="mb-4">
                <SidebarLinks links={expertTeacherLinks}/>
                </div>
                <div className="mt-">

                <Assessment5Sidebar/>
                </div>
            </div>

            <div className="col-lg-9 px-3">

                <Assessment5Details/>

            </div>

            {/* <div className="col-lg-3 px-3">
                
                <Assessment5Sidebar/>
                
            </div> */}

        </div>

    </section>
    </div>
)
}

export default Assessment5