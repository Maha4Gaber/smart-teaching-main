import React, { useState } from "react";
import "./AssessmentData.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { TiTick } from "react-icons/ti";
const AssessmentData = ({ result,type,student }) => {
  let navigate = useNavigate();
  const [teachers, setteachers] = useState([]);
  const [teacherid, setteacherid] = useState(1);
  const [role, setrole] = useState('student');
  const [subject, setsubject] = useState('');
  const [userdata, setuserdata] = useState(JSON.parse(localStorage.getItem("user_data")));

  const handleSelectChange2 = (event) => {
    setrole(event.target.value)
    localStorage.assesrol = event.target.value;
    // console.log(teachers.filter((item) => item.id == event.target.value)[0].full_name);
    // localStorage.teachername=  teachers.filter((item) => item.id == event.target.value)[0].full_name
  }
    const handleSelectChange = (event) => {
    setteacherid(event.target.value);
    // console.log(event.target.value);
    localStorage.teacherid = event.target.value;
    // console.log(teachers.filter((item) => item.id == event.target.value)[0].full_name);
    localStorage.teachername=  teachers.filter((item) => item.id == event.target.value)[0].full_name
  };
  // let navigate =useNavigate()
        // if (!localStorage.user_data) {navigate('/login')}
      //   useEffect(() => {
      //     if (localStorage.token & localStorage.token =='null') {navigate('login')}
          
      // }, []);
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
    // if (!localStorage.user_data || localStorage.user_data =='null') {navigate('login')}
    // if (!localStorage.user_data) navigate("login");
    // else {
      getdata();
    // }
    // setuserdata()
    localStorage.assesrol='student'
    console.log(userdata.group[0]);
  }, []);
  return (
    <>
      <div className=" data   mt-5">
        <div className="row">

        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> Name of Teacher : </div>
            <div className="col-6 userdata">{result ? (
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
                )}</div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> Name Assessor : </div>
            <div className="col-6 userdata">
              <div className="static">
              {JSON.parse(localStorage.getItem("user_data")) &&
                  JSON.parse(localStorage.getItem("user_data")).full_name}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> Subject</div>
            <div className="col-6 userdata">
            {result?(
                <div className="static">
                  {localStorage.subject}
                </div>
              ):(
              <input className=""  defaultValue={subject} onChange={(e)=> localStorage.subject=e.target.value} placeholder="Enter Subject" />

              )}
              </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> Role Of Assessor</div>
            <div className="col-6 userdata">
            {result?(
                  <div className="static">{localStorage.assesrol}</div>
                ):(
                  <>
                  {student?(
                  <select
                  className=""
                  value={role}
                  onChange={handleSelectChange2}
                >
                  <option value="student" className="">
                    Student
                  </option>
                </select>
                ):(<select
                  className=""
                  value={role}
                  onChange={handleSelectChange2}
                >
                  {
                    type==1&&
                    (
                      <option value="Self" className="">
                      Self
                    </option>
                    )
                  }
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
                </select>)}
                  </>
                )}
            </div>
          </div>
        </div>
        {
          userdata!='null' &userdata.group.length!=0
          ?(
        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> Class</div>
            <div className="col-6 userdata">
            {
                      userdata.group[0].title
                      }

            </div>
          </div>
        </div>
          ):''
        }

        <div className="col-lg-6 col-md-12 mt-3">
          <div className="row">
            <div className="col-6 userlable"> Date</div>
            <div className="col-6 userdata">
            <div className="static">
            {new Date().toISOString().slice(0, 10)}
            </div>
            </div>
          </div>
        </div>
        



          {/* <div className="col-md-6 col-12">
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
              {result?(
                localStorage.subject
              ):(
              <input className=""  defaultValue={subject} onChange={(e)=> localStorage.subject=e.target.value} placeholder="Enter Subject" />

              )}
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="box">
              <div className="title">Role Of Assessor</div>
              <div className="infodata">
              {result?(
                  localStorage.assesrol
                ):(
                  <>
                  {student?(
                  <select
                  className=""
                  value={role}
                  onChange={handleSelectChange2}
                >
                  <option value="student" className="">
                    Student
                  </option>
                </select>
                ):(<select
                  className=""
                  value={role}
                  onChange={handleSelectChange2}
                >
                  {
                    type==1&&
                    (
                      <option value="Self" className="">
                      Self
                    </option>
                    )
                  }
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
                </select>)}
                  </>
                )}
              </div>
            </div>
          </div>
          {
              <div className="col-md-6 col-12">
                <div className="box">
                  <div className="title">Class</div>
                  <div className="infodata">
                    {
                      localStorage.getItem("user_data") & localStorage.getItem("user_data")!='null'  &&JSON.parse(localStorage.getItem("user_data")).group[0]&&JSON.parse(localStorage.getItem("user_data")).group[0].title}

                  </div>
                </div>
              </div>
          }
          <div className="col-md-6 col-12">
            <div className="box">
              <div className="title">Date</div>
              <div className="infodata">
                {new Date().toISOString().slice(0, 10)}
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AssessmentData;
