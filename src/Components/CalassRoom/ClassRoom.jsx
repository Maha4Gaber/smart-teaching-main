import React from 'react';
import classes from './ClassRoom.module.css';
import Classbg from '../../assests/class.png';
import ClassAnalysis from '../ClassAnalysis/ClassAnalysis';
import CourseDescription from '../CourseDescription/CourseDescription';
import SearchClass from '../SearchClass/SearchClass';
import Tags from '../Tags/Tags';
import CoursesClass from '../CoursesClass/CoursesClass';
import ClassContent from '../ClassContent/ClassContent';
import FollowUs from '../FollowUs/FollowUs';
import PopCourses from '../PopCourses/PopCourses';
import Touchform from '../TouchForm/Touchform';
import BuyNow from '../BuyNow/BuyNow';
import Comments from "../../Components/Comments/Comments";
import CommentForm from "../../Components/Comments/CommentForm/CommentForm";

export const ClassRoom = () => {
  return (
      <div className={classes.class__room}>
          <div>
              <div className={classes.img_class}>
                  <img src={Classbg} alt="claass_pg" />
                  <div className={classes.img_actions}>
                      <h6>Education and development</h6>
                      <p>
                          <span>Last Update:</span> Nov 05, 2023
                      </p>
                  </div>
              </div>
              <ClassAnalysis />
              <CourseDescription />
              <ClassContent />
              <SearchClass />
              <Tags />
              <CoursesClass />
              <Comments />
              <CommentForm />
          </div>
          <div>
              <BuyNow />
              <FollowUs />
              <PopCourses />
              <Touchform />
          </div>
      </div>
  );
};
