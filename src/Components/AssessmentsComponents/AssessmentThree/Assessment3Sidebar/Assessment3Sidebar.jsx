import React from 'react'
import ImageComp from '../../../ImageComp/ImageComp'
import img1 from '../../../../assests/Assessments/Assessment3/img1.png'
import './Assessment3Sidebar.css'
import { useTranslation } from 'react-i18next'

const Assessment3Sidebar = () => {
  const { t } = useTranslation();
  return (
    <aside className='ass3-sidebar p-4 mt-4'>

        <div className='d-flex justify-content-center mb-4'>
            <div className='side-img'>
                <ImageComp src={img1} />
            </div>
        </div>

        <h2>{t('COI')}</h2>

        <p>
        {t('as3side')}
        </p>

    </aside>
  )
}

export default Assessment3Sidebar