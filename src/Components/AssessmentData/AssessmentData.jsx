import React, { useState } from "react";
import "./AssessmentData.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { TiTick } from "react-icons/ti";
const AssessmentData = ({ result }) => {
  let navigate = useNavigate();
  const [teachers, setteachers] = useState([]);
  const [teacherid, setteacherid] = useState(1);

  const handleSelectChange = (event) => {
    setteacherid(event.target.value);
    // console.log(event.target.value);
    localStorage.teacherid = event.target.value;
    // console.log(teachers.filter((item) => item.id == event.target.value)[0].full_name);
    localStorage.teachername=  teachers.filter((item) => item.id == event.target.value)[0].full_name
  };
  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v2/users/?role=instructor").then((res) => {
          setteachers(res.data);
          result ? "" : (localStorage.teacherid = res.data[1].id);
          result ? "" : (localStorage.teachername = res.data[1].full_name);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    localStorage.getItem("teachername");
    if (!localStorage.user_data) navigate("login");
    else {
      getdata();
    }
  }, []);
  return (
    <>
      <div className=" data   m-5">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="box">
              <div className="title">Name of Teacher</div>
              <div className="infodata">
                {result ? (
                  <div className="infodata">
                    {localStorage.getItem("teachername")}
                  </div>
                ) : (
                  <select
                    className=""
                    value={teacherid}
                    onChange={handleSelectChange}
                  >
                    {teachers.map((teacher, idx) => (
                      <option key={idx} value={teacher.id} className="">
                        {teacher.full_name}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="box">
              <div className="title">Name Assessor</div>
              <div className="infodata">
                {JSON.parse(localStorage.getItem("user_data")) &&
                  JSON.parse(localStorage.getItem("user_data")).full_name}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="box">
              <div className="title">Subject</div>
              <div className="infodata">
                {JSON.parse(localStorage.getItem("user_data")) &&
                  JSON.parse(localStorage.getItem("user_data")).role}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="box">
              <div className="title">Role Of Assessor</div>
              <div className="infodata">
                <select
                  className=""
                  // value={teacherid}
                  // onChange={handleSelectChange}
                >
                  <option value="Self" className="">
                    Self
                  </option>
                  <option value="Principal" className="">
                    Principal
                  </option>
                  <option value="Peers" className="">
                    Peers
                  </option>
                  <option value="Supervisors" className="">
                    Supervisors
                  </option>
                  <option value="Students" className="">
                    Students
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="box">
              <div className="title">Class</div>
              <div className="infodata">
                {new Date().toISOString().slice(0, 10)}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="box">
              <div className="title">Date</div>
              <div className="infodata">
                {new Date().toISOString().slice(0, 10)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentData;
