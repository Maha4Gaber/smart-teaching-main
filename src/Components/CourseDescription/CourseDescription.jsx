import React from 'react';
import classes from './CourseDescription.module.css';
import ClassRoomText from '../ClassRoomText/ClassRoomText';
function CourseDescription() {
  return (
    <div className={classes.course__desc}>
      <h2>Course Details</h2>
      <div className={classes.course_detail}>
        <div>
          <ClassRoomText
            title='Instructor :'
            name='Ahmed.A'
          />
          <ClassRoomText
            title='Lectures :'
            name='120 sub'
          />
          <ClassRoomText
            title='Duration : '
            name='20h 41m 32s'
          />
          <ClassRoomText
            title='Enrolled :'
            name='2 students'
          />
          <ClassRoomText
            title='Total : '
            name='222 students'
          />
        </div>
        <div>
          <ClassRoomText
            title='Course level :'
            name='Intermediate'
          />
          <ClassRoomText
            title='Language :'
            name='English spanish'
          />
          <ClassRoomText
            title='Course Status : '
            name='Available'
          />
        </div>
      </div>
    </div>
  );
}

export default CourseDescription;
