import React from 'react'
import { ass2Table } from '../../../../data'
import './Assessment2Table.css'

const Assessment2Table = () => {


return (
    <table class="table table-bordered ass2-table">

        <thead>
            <tr>
                <th scope="col">Labels for the Index</th>
                <th scope="col"> <div className='heading'>Description</div></th>
            </tr>
        </thead>
        
        <tbody>
            {ass2Table.map(({index, desc}, idx) => 
            
                <tr key={idx}>
                    <th scope='row' ><div className='t-heading'>{index}</div></th>
                    <td >{desc}</td>
                </tr>
            )}
        </tbody>
    
    
    
    </table>
  )
}

export default Assessment2Table