import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6"; // with circle

import './MemeberShipTypes.css'
import { MemeberShipTypesData } from './../../../data';
import { useTranslation } from 'react-i18next';

const MemeberShipTypes = () => {
    const { t } = useTranslation();



    return (
    <div className='member-type p-3 mb-0 mb-lg-4'>


        <h2 className='mt-3'>{t('membersidetitle')}</h2>
        <div>{t('membersidedesc')}</div>
    
        {MemeberShipTypesData.map (({head, lists}, idx) => 

            <div key={idx}>
                <h2>{t(head)}</h2>
                
                <ul>
                    {lists.map((list, idx) =>
                        <li key={idx} className='d-flex mb-4'>
                            <span className='simple-icon'>{list.icon}</span>
                            <span className='mx-2'></span>
                            <span className='desc'>
                                {t(list.list)}
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        )}
    
    
    </div>
)
}

export default MemeberShipTypes