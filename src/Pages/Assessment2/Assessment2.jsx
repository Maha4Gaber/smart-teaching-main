import React from 'react'
import './Assessment2.css'
import SidebarLinks from '../../Components/SidebarLinks/SidebarLinks'
import { expertTeacherLinks } from '../../data'
import Assessment2Details from '../../Components/AssessmentsComponents/AssessmentTwo/Assessment2Details/Assessment2Details'
import Assessment2Sidebar from '../../Components/AssessmentsComponents/AssessmentTwo/Assessment2Sidebar/Assessment2Sidebar'

const Assessment2 = () => {

return (
    
    <>

    <figure className='main-ass2-img d-flex align-items-center m-0'>
        <figcaption>
            <h1 className='m-0'>Using Teacher Competency <br/> Assessment (TCA) to Drive <br/> Teacher Excellence</h1>
        </figcaption>
    </figure>
    

    <section className='ass2 p-3 p-md-5'>

        <div className="row gy-4 main-row">

            <div className="col-xl-3 px-3">

                <SidebarLinks links={expertTeacherLinks}/>

            </div>

            <div className="col-xl-6 px-3">

                <Assessment2Details/>

            </div>

            <div className="col-xl-3 px-3">
                
                <Assessment2Sidebar/>
                
            </div>
        </div>

    </section>
    
    </>
)
}

export default Assessment2