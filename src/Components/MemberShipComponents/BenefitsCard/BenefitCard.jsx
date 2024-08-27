import React from 'react'
import { FaCheck } from "react-icons/fa6";
import parse from 'html-react-parser';
import './BenefitCard.css'
import { useTranslation } from 'react-i18next';

const BenefitCard = ({icon, id, head, lists}) => {
  const { t } = useTranslation();
    
return (
        <div className='benefit-card p-3 h-100'>
            <div className="d-flex justify-content-center align-items-center mb-4">
                <div className= {`rounded-circle p-2 benefitIcon-box box${id}`}>
                    {icon}
                </div>

                {/* <div className="mx-1 benefitNo-box">
                    {id}
                </div> */}
            </div>

            <div className='text-center fs-4 mb-2'>{parse(t(head))}</div>
            <ul >
            {lists.map (({list}, idx) =>
                <li key={idx} className='d-flex'>
                    <span className='benefitList-icon px-2'> <FaCheck/> </span>
                    <span className='mx-1'></span>
                    <span className = 'desc'>{parse(t(list))}</span>
                </li>
            )}
            </ul>
        </div>

)
}

export default BenefitCard