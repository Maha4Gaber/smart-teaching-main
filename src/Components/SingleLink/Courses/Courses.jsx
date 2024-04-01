import React from 'react';
import classes from './Courses.module.css';
import Course from '../../Course/Course';
function Courses() {
  return (
      <>
          <div className={classes.coures_content}>
              <h5 className="text-center">Educational Paths</h5>
              <h3 className="text-center">
                  Perfect online learning paths for your career
              </h3>
              {/* <ul>
          <li className={classes.active}>All</li>
          <li>Education and development</li>
          <li>Education and development</li>
          <li>Educational system design</li>
        </ul>
        <ul>
          <li>Teacher evaluation</li>
          <li>The three-level HOST model</li>
        </ul> */}
          </div>

          <div className="row p-5">
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
              <Course />
          </div>
      </>
  );
}

export default Courses;
