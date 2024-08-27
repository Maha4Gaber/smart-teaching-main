import React from 'react'
import parse from 'html-react-parser';
import { FaCheck } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6"; // with circle
import './MemberShipPlan.css'
import MainBtn from '../../MainBtn/MainBtn';
import { useTranslation } from 'react-i18next';

const MemberShipPlan = ({head, img, cost, title, lists, id}) => {
  const { t } = useTranslation();
  return (
    <div className='h-100 plans' >
    <div className="w-100  d-flex align-items-center justify-content-center img">
    <img className='h-auto ' src={img} alt= {title} />
    </div>
    <div className="title border-y my-2">{parse(t(head))}</div>
    <div className="title border-y my-2">{parse(t(cost))}</div>
    <div className={`member-plan plan plan${id}  d-flex flex-column justify-content-start`}>

        <div>

            <h1 className='  '>{parse(t(title))}</h1>
            
            
            {/* <div className='plan-price d-flex align-items-center'>
                <span className='dollar-sign '>$</span>
                <span className='member-price mx-1'>{cost}</span>
                <span className='mx-1 duration'>/ month</span>
            </div> */}
            
            {/* <h4>{}{parse(t(title))}</h4> */}
            
            <ul >
                {lists.map (({list}, idx) =>
                    <li key={idx} className='d-flex   mb-3'>
                        <span className= 'rounded-circle icon-plan'> <FaCheck/> </span>
                        <span className='mx-1'></span>
                        <span className = 'desc'>{parse(t(list))}</span>
                    </li>
                )}
            </ul>

        </div>

        {/* <MainBtn shadow> Get Started</MainBtn> */}
        {/* <button>Get Started</button> */}

    </div>
    </div>
)
}

export default MemberShipPlan