import React from 'react'
import SidebarLinks from '../../Components/SidebarLinks/SidebarLinks'
import { expertTeacherLinks } from '../../data'

import './Assessment5.css'
import Assessment5Details from '../../Components/AssessmentsComponents/AssessmentFive/Assessment5Details/Assessment5Details'
import Assessment5Sidebar from '../../Components/AssessmentsComponents/AssessmentFive/Assessment5Sidebar/Assessment5Sidebar'

const Assessment5 = () => {

return (
    <div>
    <figure className='main-ass5-img main-img d-flex align-items-center '>
        <figcaption>
            <h1 className=''>Student Rating Their Teacher</h1>
            <h4>Tools For Your Professional Growth</h4>
        </figcaption>
    </figure>

    <section className="ass5 p-3 p-md-4">

        <div className="row gy-4 ">

            <div className="col-lg-3 px-3">

                <SidebarLinks links={expertTeacherLinks}/>

            </div>

            <div className="col-lg-6 px-3">

                <Assessment5Details/>

            </div>

            <div className="col-lg-3 px-3">
                
                <Assessment5Sidebar/>
                
            </div>

        </div>

    </section>
    </div>
)
}

export default Assessment5