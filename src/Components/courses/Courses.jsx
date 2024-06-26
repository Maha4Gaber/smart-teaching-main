import React, { useEffect, useState } from "react";
import classes from "./Courses.module.css";
import Course from "../Course/Course";
import { useTranslation } from "react-i18next";
import axios from "axios";
function Courses() {
const { t } = useTranslation();
const [courses, setCourses] = useState([]);
// const [course, setCourse] = useState({});
useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v1/courses/").then((res) => {
          // console.log(res.data);
          setCourses(res.data.slice(0,9))
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    // if (!localStorage.user_data) navigate("login");
    // else {
      getdata();
    // }
  }, []);
return (
<>
    <div data-aos="zoom-in" className={classes.coures_content}>
    {/* <h5 className="text-center">{t("eduPaths")}</h5>
    <h3 className="text-center">{t("eduPathsSubTitle")}</h3>
    <ul>
        <li className={classes.active}>{t("all")}</li>
        <li>{t("educationAndDevelopment")}</li>
        <li>{t("educationAndDevelopment")}</li>
        <li>{t("eduSystemDesign")}</li>
    </ul>
    <ul>
        <li>{t("teacherEvaluation")}</li>
        <li>{t("threeLevelHost")}</li>
    </ul> */}
    </div>

    <div className="row py-5">
        {courses.map((cours, id) => (
        <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <Course id={cours.id} cours={cours} />
        </div>
        ))}
    {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
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
</div> */}
    </div>
</>
);
}

export default Courses;
