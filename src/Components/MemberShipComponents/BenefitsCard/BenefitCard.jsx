import React from 'react'
import { FaCheck } from "react-icons/fa6";
import parse from 'html-react-parser';
import './BenefitCard.css'

const BenefitCard = ({icon, id, head, lists}) => {
    
return (
        <div className='benefit-card p-3 h-100'>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div className= {`rounded-circle p-2 benefitIcon-box box${id}`}>
                    {icon}
                </div>

                <div className="mx-1 benefitNo-box">
                    {id}
                </div>
            </div>

            <h2 className='text-start'>{parse(head)}</h2>
            
            <ul >
            {lists.map (({list}, idx) =>
                <li key={idx} className='d-flex'>
                    <span className='benefitList-icon px-2'> <FaCheck/> </span>
                    <span className='mx-1'></span>
                    <span className = 'desc'>{list}</span>
                </li>
            )}
            </ul>
        </div>

)
}

export default BenefitCard