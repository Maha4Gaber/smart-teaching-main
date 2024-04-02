import React from 'react'
import SidebarLinks from './../../Components/SidebarLinks/SidebarLinks';
import { expertTeacherLinks, teachingAcademyCards } from '../../data';
import ExpertTeacherCard from './../../Components/ExpertTeacherComponents/ExpertTeacherCard/ExpertTeacherCard';
import parse from "html-react-parser";

import './ExpertTeachingAcd.css'
import { useTranslation } from 'react-i18next';
const ExpertTeachingAcd = () => {
    const {t} = useTranslation()

return (
    <>
    <figure className='main-expert-acd-img main-img d-flex align-items-center '>
        <figcaption>
            <h1 className='m-0'>{t("STA")}</h1>
        </figcaption>
    </figure>

    <div className="expert-academy container">

        <div className="row gy-4">

            <div className="col-lg-3 px-3">

                <SidebarLinks links={expertTeacherLinks}/>

            </div>

            <div className="col-lg-9 px-3">
                
                <div className="expert-academy-details">

                    <h2>{parse(t("STAProDev"))}</h2>

                    <h3>{t("ETCP")}</h3>

                    <h3>{t("professionalDevforTeachers")}</h3>

                    <div className="row mt-4 gy-4">

                        {teachingAcademyCards.map((card, idx) =>
                        <div className="col-lg-4 col-md-6" key={idx}>
                            <ExpertTeacherCard className= 'expert-academy-card' {...card}/>
                        </div>
                        )}
                    </div>

                </div>

            </div>
        </div>

    </div>
    </>
)
}

export default ExpertTeachingAcd