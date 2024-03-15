import React from 'react';
import MiddleExpert from '../../Components/MiddleExpert/MiddleExpert';
import SidebarLinks from '../../Components/SidebarLinks/SidebarLinks';
import { expertTeacherLinks } from '../../data';
function ExpertTeacherCer() {
  return (
    <section className="ass4 pading-top p-3 p-md-5">
        <div className="row gy-4 main-row">
            <div className="col-lg-4 px-3">
                <SidebarLinks links={expertTeacherLinks}/>
            </div>
            <div className="col-lg-8 px-3">
                <MiddleExpert />
            </div>
        </div>
    </section>

      
    
  );
}

export default ExpertTeacherCer;
