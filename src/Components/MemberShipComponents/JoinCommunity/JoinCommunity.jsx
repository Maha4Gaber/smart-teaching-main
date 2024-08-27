import React from 'react'
import { BenefitCards, JoinOurCommunity } from '../../../data'
import BenefitCard from '../BenefitsCard/BenefitCard'
import './JoinCommunity.css'
import { useTranslation } from 'react-i18next'

const JoinCommunity = () => {
  const { t } = useTranslation();


    return (
    <div className='join-community py-3 px-4'>
        <div className='fs-1 text-center  mb-3'>{t('membertitle')}</div>
        <h4 className='mb-4 fs-4'>{t('membersubtitle')}</h4>

        <ul>
            {JoinOurCommunity.map (({icon, desc}, idx) =>
                <li key={idx} className='d-flex '>
                    <span className='simple-icon'>{icon}</span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>{t(desc)}</span>
                </li>
            )}
        </ul>



        <h4 className='my-4 fs-5'>{t('membersubtitle2')}</h4>
        <p className="">{t('memberp5')}</p>
        <p className="">{t('memberp6')}</p>


        {/* <h4 className='mt-4 mb-5'>Any individual or organisation can register (create an account) and have access to the educational materials.</h4>

        <h2 className='mt-2 mb-5'>Benefits of Memberships</h2> */}

        {/* <div className="row justify-content-center gy-3">
            {BenefitCards.map((card, idx) =>
                <div className="col-xl-4 col-md-6 px-2" key={idx}>
                    <BenefitCard {...card}/>
                </div>
            )}
        </div> */}
    </div>
)
}

export default JoinCommunity