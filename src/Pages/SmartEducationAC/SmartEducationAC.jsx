import "./SmartEducationAC.css";
import React, { useEffect, useState } from "react";
import ServicesHeader from "../../Components/ServicesHeader/ServicesHeader";
import CoursesInfo from "../../Components/CoursesInfo/CoursesInfo";
import Course from "../../Components/Course/Course";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
const SmartEducationAC = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [courses, setCourses] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v2/team").then((res) => {
          // console.log(res.data);
          setCourses(res.data);
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
      <ServicesHeader title="SmartEducationAC" bold />
      <CoursesInfo title="SmartEducationAC">
        <div className="row">
          {courses.map((cours, id) => (
            <div key={id} className="col-xl-3 col-lg-3 col-md-4 col-sm-5">
              <div className="card" onClick={()=>{
                navigate('/SmartEducationACDetails/'+cours.slug)
              }}>
                <img className="" src={cours.pic} />
                <h4>{lang=='en'?cours.title_en:cours.title_ar}</h4>
              </div>
            </div>
          ))}
        </div>
      </CoursesInfo>
    </>
  );
};

export default SmartEducationAC;
