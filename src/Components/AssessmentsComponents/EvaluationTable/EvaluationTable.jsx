import React from 'react'
import './EvaluationTable.css'
import { use } from 'i18next'
import { useTranslation } from 'react-i18next'

const EvaluationTable = ({table}) => {
    const {t}=useTranslation()

return (
    
    <table className=" simple">

        <thead>
            <tr>
                {table[0].title.map(({name}, idx) => 
                    <th scope="col" key={idx}> <div> {t(name)} </div> </th>
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