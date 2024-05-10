import React from 'react'
import parse from 'html-react-parser';
import { FaCheck } from "react-icons/fa6";
import { FaCircleCheck } from "react-icons/fa6"; // with circle
import './MemberShipPlan.css'
import MainBtn from '../../MainBtn/MainBtn';

const MemberShipPlan = ({head, img, cost, title, lists, id}) => {
return (
    <div className={`member-plan plan plan${id}  h-100 d-flex flex-column justify-content-between`}>

        <div>

            <h1 className=' position-relative z-3'>{parse(head)}</h1>
            
            <img src={img} alt= {title} />
            
            <div className='plan-price d-flex align-items-center'>
                <span className='dollar-sign '>$</span>
                <span className='member-price mx-1'>{cost}</span>
                <span className='mx-1 duration'>/ month</span>
            </div>
            
            <h4>{title}</h4>
            
            <ul >
                {lists.map (({list}, idx) =>
                    <li key={idx} className='d-flex justify-content-between  mb-3'>
                        <span className= 'rounded-circle icon-plan'> <FaCheck/> </span>
                        <span className='mx-1'></span>
                        <span className = 'desc'>{list}</span>
                    </li>
                )}
            </ul>

        </div>

        <MainBtn shadow> Get Started</MainBtn>
        {/* <button>Get Started</button> */}

    </div>
)
}

export default MemberShipPlan