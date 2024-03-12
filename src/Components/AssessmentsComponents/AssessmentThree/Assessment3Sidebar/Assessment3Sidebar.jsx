import React from 'react'
import ImageComp from '../../../ImageComp/ImageComp'
import img1 from '../../../../assests/Assessments/Assessment3/img1.png'
import './Assessment3Sidebar.css'

const Assessment3Sidebar = () => {
  return (
    <aside className='ass3-sidebar p-4'>

        <div className='d-flex justify-content-center mb-4'>
            <div className='ass3-side-img'>
                <ImageComp src={img1} />
            </div>
        </div>

        <h2>Classroom Observation</h2>

        <p>
            The main purpose of the classroom observation is to allow a teacher to get feedback from an objective, experienced observer and to involve in context-specific discussions about teaching with adviser.
        </p>

    </aside>
  )
}

export default Assessment3Sidebar