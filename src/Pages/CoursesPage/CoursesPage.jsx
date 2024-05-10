import React, { useEffect, useState } from 'react';
import ServicesHeader from '../../Components/ServicesHeader/ServicesHeader';
import CoursesInfo from '../../Components/CoursesInfo/CoursesInfo';
import Course from '../../Components/Course/Course';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CoursesPage = () => {    let navigate = useNavigate();

const [courses, setCourses] = useState([]);
useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v1/courses/").then((res) => {
          // console.log(res.data);
          setCourses(res.data)
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
      <ServicesHeader
        title='Genral Courses'
        bold
      />
      <CoursesInfo title='Genral Courses'>
        <div className='row'>
          {courses.map((cours, id) => (
          <div key={id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <Course id={cours.id} cours={cours} />
          </div>
        ))}
          
        </div>
      </CoursesInfo>
    </>
  );
};

export default CoursesPage;
