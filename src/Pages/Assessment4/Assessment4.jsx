import React from 'react'

import SidebarLinks from './../../Components/SidebarLinks/SidebarLinks';
import { expertTeacherLinks } from '../../data';
import Assessment4Details from '../../Components/AssessmentsComponents/AssessmentFour/Assessmet4Details/Assessment4Details';
import Assessment4Sidebar from '../../Components/AssessmentsComponents/AssessmentFour/Assessment4Sidebar/Assessment4Sidebar';

import './Assessment4.css'
const Assessment4 = () => {

return (
    
    <section className="ass4 p-3 p-md-5">

        <div className="row gy-4 main-row">

            <div className="col-xl-3 px-3">
                <SidebarLinks links={expertTeacherLinks}/>
            </div>
            <div className="col-xl-6 px-3">
                <Assessment4Details/>
            </div>
            <div className="col-xl-3 px-3">
                <Assessment4Sidebar/>
            </div>
        </div>
    </section>
)
}

export default Assessment4