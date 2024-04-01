import React from 'react'
import { expertTeacherSidebar } from '../../../data'
import './ExpertTeacherSidebar.css'
import { useTranslation } from 'react-i18next'

const ExpertTeacherSidebar = () => {
const {t} = useTranslation()
return (
    <div className='expert-teacher-sidebar'>
        <h2>{t("certifiedExpertTeacher")}</h2>
        <ul>
        {expertTeacherSidebar.map (({icon, desc}, idx) =>
                <li key={idx} className='d-flex '>
                    <span className='simple-icon'>{icon}</span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>{t(desc)}</span>
                </li>
            )}
        </ul>
    </div>
)
}

export default ExpertTeacherSidebar