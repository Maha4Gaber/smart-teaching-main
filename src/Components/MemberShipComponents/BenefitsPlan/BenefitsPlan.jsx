import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { benefitsDetails } from '../../../data'
import './BenefitsPlan.css'

const BenefitsPlan = () => {
return (

<div className='px-0 px-md-3 px-lg-4'>

    <table className="table table-bordered text-center">
        
        <thead className='main-head'>
            <tr>
                <th scope="col" className='text-white'></th>
                <th scope="col" className=' text-white'>Public</th>
                <th className=' text-white' colSpan='3' scope="col">Registered</th>
                
            </tr>
        </thead>
        <thead>
            <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">Free</th>
                <th scope="col">Expert</th>
                <th scope="col">Institute</th>
                
            </tr>
        </thead>
        
        <tbody>
            {benefitsDetails.map(({title, cases}, idx) =>
            
            <tr key={idx}>
                <th scope="row">{title}</th>
                {cases.map((item, idx) => 
                
                <td key={idx}>{item.case && <FaCheck/>}</td>
                )}
                
            </tr>
            )}
        </tbody>
</table>
    
</div>

)
}

export default BenefitsPlan