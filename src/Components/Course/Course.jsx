import React, { useState } from "react";
import classes from "./Course.module.css";
import CourseImg from "../../assests/couresImg.jpg";
import Love from "../../assests/Love";
import BtnRead from "../BtnRead/BtnRead";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowRight from "../../assests/ArrowRight";
import { useTranslation } from "react-i18next";
import axios from "axios";
function Course({ price ,id }) {
const { t ,i18n} = useTranslation();
const lang = i18n.language;
let isEn = lang == "en" ?true: false;
// console.log(course);
const [course, setCourse] = useState({});
async function getdata() {
    // console.log(id);
    await axios.get("api/v1/courses/" + id).then((res) => {
        // console.log(res.data);
        setCourse(res.data);
    });
    }
    getdata()
return (
<motion.div className={classes.course} data-aos="flip-right">
    <div className={classes.course__container}>
    <div className={classes.container__tag}>
        <span>
        <Love />
        </span>
        <button>{course.category}</button>
    </div>
    <img src={course.image} alt="courseImg" />
    </div>
    <h4>{isEn?course.title_en:course.title_ar}</h4>
    <hr />
    <div className={classes.course__tag}>
    <span>{course.type=='free'? t("free") :course.price}</span>
    <Link to="/course-details" className={classes.btnRead}>
        {t("readMore")} &nbsp; <ArrowRight />
    </Link>
    </div>
</motion.div>
);
}

export default Course;
