import React from 'react'
import './PhaseDetails.scss'
import { useTranslation } from 'react-i18next'

const PhaseDetails = ({name, desc}) => {
    const {t} = useTranslation()
    return (
    <p className='phase-details'><span>{t(name)}</span> {t(desc)} </p>
)
}

export default PhaseDetails