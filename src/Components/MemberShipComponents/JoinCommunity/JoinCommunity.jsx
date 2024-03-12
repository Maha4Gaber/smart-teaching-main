import React from 'react'
import { BenefitCards, JoinOurCommunity } from '../../../data'
import BenefitCard from '../BenefitsCard/BenefitCard'
import './JoinCommunity.css'

const JoinCommunity = () => {

    return (
    <div className='join-community py-3 px-4'>
        <h2>Join Smart Teaching Community</h2>
        <h4 className='mb-4'>Organizations that join the STS can benefit in the following ways:</h4>

        <ul>
            {JoinOurCommunity.map (({icon, desc}, idx) =>
                <li key={idx} className='d-flex '>
                    <span className='simple-icon'>{icon}</span>
                    <span className='mx-2'></span>
                    <span className = 'desc'>{desc}</span>
                </li>
            )}
        </ul>

        <h4 className='mt-4 mb-5'>Any individual or organisation can register (create an account) and have access to the educational materials.</h4>

        <h2 className='mt-2 mb-5'>Benefits of Memberships</h2>

        <div className="row justify-content-center gy-3">
            {BenefitCards.map((card, idx) =>
                <div className="col-xl-4 col-md-6 px-2" key={idx}>
                    <BenefitCard {...card}/>
                </div>
            )}
        </div>
    </div>
)
}

export default JoinCommunity