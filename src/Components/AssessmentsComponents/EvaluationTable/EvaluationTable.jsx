import React from 'react'
import './EvaluationTable.css'

const EvaluationTable = ({table}) => {


return (
    
    <table className="table table-bordered simple-table">

        <thead>
            <tr>
                {table[0].title.map(({name}, idx) => 
                    <th scope="col" key={idx}> <div> {name} </div> </th>
                )}
            </tr>
        </thead>

        <tbody>
            <tr>
                {table[0].evaluation.map(({value}, idx) => 
                    <td key={idx}> <div> {value} </div> </td>
                )}
                
            </tr>
        </tbody>

    </table>
)
}

export default EvaluationTable