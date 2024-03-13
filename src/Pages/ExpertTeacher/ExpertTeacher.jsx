import SidebarLinks from '../../Components/SidebarLinks/SidebarLinks'
import { expertTeacherLinks } from '../../data'
import ExpertTeacherSidebar from '../../Components/ExpertTeacherComponents/ExpertTeacherSidebar/ExpertTeacherSidebar'
import ExpertTeacherDetails from '../../Components/ExpertTeacherComponents/ExpertTeacherDetails/ExpertTeacherDetails'
import parse from 'html-react-parser';


import './ExpertTeacher.css'
import { useTranslation } from 'react-i18next'
const ExpertTeacher = () => {
    
    const {t} = useTranslation()
return (

    <div>

    <figure className='main-expert-teacher-img d-flex align-items-center '>
        <figcaption>
            <h1 className='m-0 text-center w-100' >{parse(t("expertTeacherTitle"))} </h1>
        </figcaption>
    </figure>


    <section className='expert-teacher'>

    <div className="row gy-4 ">

    <div className="col-lg-3 col-md-3 col-lg-3 px-2">

        <SidebarLinks links={expertTeacherLinks}/>

    </div>

    <div className="col-lg-6   col-md-7  px-2">

        <ExpertTeacherDetails/>

    </div>

    <div className="col-lg-3 col-md-3 px-2 ">

        <ExpertTeacherSidebar/>

    </div>

</div>
        
    </section>

    </div>
)
}

export default ExpertTeacher