import React from 'react';
import classes from './Courses.module.css';
import Course from '../Course/Course';
import { useTranslation } from 'react-i18next';
function Courses() {
    const {t} = useTranslation()
    return (
        <>
            <div data-aos="zoom-in" className={classes.coures_content}>
                <h5 className="text-center">{t("eduPaths")}</h5>
                <h3 className="text-center">
                    {t("eduPathsSubTitle")}
                </h3>
                <ul>
          <li className={classes.active}>{t("all")}</li>
          <li>{t("educationAndDevelopment")}</li>
          <li>{t("educationAndDevelopment")}</li>
          <li>{t("eduSystemDesign")}</li>
        </ul>
        <ul>
          <li>{t("teacherEvaluation")}</li>
          <li>{t("threeLevelHost")}</li>
        </ul>
      </div>

            <div className="row p-5">
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Course />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Course />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Course />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Course />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Course />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Course />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Course />
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
                    <Course />
                </div>
            </div>
        </>
    );
}

export default Courses;
