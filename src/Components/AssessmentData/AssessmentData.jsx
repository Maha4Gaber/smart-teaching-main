import React, { useState } from "react";
import "./AssessmentData.css";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import rightLogo from "../../assests/Register/right.png";
// import { TiTick } from "react-icons/ti";
const AssessmentData = ({ result, type, student, title }) => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const [teachers, setteachers] = useState([]);
  const [teacherid, setteacherid] = useState(null);
  const [role, setrole] = useState(null);
  const [subject, setsubject] = useState(null);
  // const [userdata, setuserdata] = useState(
  //   userdata
  // );
  const userdata = useSelector((state) => state.userData.user_data);
  const [valid, setvalid] = useState(false);
  const [dataobj, setdataobj] = useState({});

  const handleSelectChange2 = (event) => {
    setrole(event.target.value);
    localStorage.assesrol = event.target.value;
  };
  const handleSelectChange = (event) => {
    // console.log(event.target.value);
    setteacherid(event.target.value);
    localStorage.teacherid = event.target.value;
    localStorage.teachername = teachers.filter(
      (item) => item.id == event.target.value
    )[0].full_name;
    // console.log(teachers.filter(
    //   (item) => item.id == event.target.value
    // )[0].full_name);
  };
  console.log(title);
  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v2/users/?role=instructor").then((res) => {
          // console.log(res.data);
          setteachers(res.data);
          result ? "" : (localStorage.teacherid = res.data[0].id);
          // result ? "" : (localStorage.teachername = res.data[0].full_name);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    setvalid(
      (teacherid != null  ) & (role != null  ) & (subject != null  ) ? true : false
    );
    // localStorage.getItem("teachername");
    getdata();
    // console.log(valid);
    // console.log(teacherid);
    // console.log(role);
    // console.log(subject);
  }, [teacherid, role, subject]);
  const submeitdata = () => {
    let obj = {
      teachername: teachers.filter((item) => item.id == teacherid)[0].full_name,
      role: role,
      subject: subject,
      assessor:
      userdata &&
      userdata.full_name,
      class: userdata.group[0] && userdata.group[0].title,
    };
    
    setdataobj(obj);

  let model = document.getElementById("model2");
  model.click();
  setTimeout(() => {
    let model2 = document.getElementById("close2");
    console.log(model2);
    model2.click();
    // let close = document.getElementById("close");
    // close.click();
    // navigate('/');
  }, 1800);
  };
  return (
    <>
      <div className=" data   mt-5">
      {result?<><h1 className="py-1 text-center w-100  fs-2 " >{t(title)}</h1></>:<><h2 className="py-1  fs-5 " >{t(title)}</h2></>}
      
        <div className="row">
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="row">
              <div className="col-6 userlable"> {t("mame of teacher")} </div>
              <div className="col-6 userdata">
                {result ? (
                  <div className="infodata">
                    {localStorage.teachername }
                  </div>
                ) : (
                  <select
                    className=""
                    value={teacherid}
                    onChange={handleSelectChange}
                    required
                  >
                    <option className="" selected disabled>
                      {" "}
                    </option>
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
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="row">
              <div className="col-6 userlable"> {t("name Of Assessor")} </div>
              <div className="col-6 userdata">
                <div className="static">
                  {JSON.parse(localStorage.getItem("user_data"))&&JSON.parse(localStorage.getItem("user_data")).full_name}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="row">
              <div className="col-6 userlable"> 
              {t("subject")}</div>
              <div className="col-6 userdata">
                {result ? (
                  <div className="static">
                  {localStorage.subject}</div>
                ) : (
                  <input
                    className=""
                    required
                    onChange={(e) => {
                      localStorage.subject = e.target.value;
                      setsubject(e.target.value);
                    }}
                    placeholder={t("subject")}
                  />
                )}
                {/* {subject} */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 mt-3">
            <div className="row">
              <div className="col-6 userlable"> {t("Role Of Assessor")}</div>
              <div className="col-6 userdata">
                {result ? (
                  <div className="static">{t(localStorage.assesrol)}</div>
                ) : (
                  <>
                    {student ? (
                      <select
                        className=""
                        value={role}
                        onChange={handleSelectChange2}
                      >
                        <option className="" disabled selected>
                          {" "}
                        </option>
                        <option value="student" className="">
                          {t('student')}
                        </option>
                      </select>
                    ) : (
                      <select
                        className=""
                        value={role}
                        onChange={handleSelectChange2}
                      >
                        <option className="" disabled selected>
                          {" "}
                        </option>
                        {type == 1 && (
                          <option value="self" className="">
                          {t('self')}
                          </option>
                        )}
                        <option value="principal" className="">
                          {t('principal')}
                        </option>
                        <option value="peers" className="">
                          
                          {t('peers')}
                        </option>
                        <option value="supervisors" className="">
                          {t('supervisors')}
                        </option>
                        {/* <option value="Students" className="">
                          Students
                        </option> */}
                      </select>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          {userdata && userdata != "null" && userdata.group[0] ? (
            <div className="col-lg-6 col-md-12 mt-3">
              <div className="row">
                <div className="col-6 userlable"> {t("Class")}</div>
                <div className="col-6 userdata">
                  {userdata.group[0] && userdata.group[0].title}
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="col-lg-6 col-md-12 mt-3">
            <div className="row">
              <div className="col-6 userlable"> {t("date")}</div>
              <div className="col-6 userdata">
                <div className="static">
                  {new Date().toISOString().slice(0, 10)}
                </div>
              </div>
            </div>
          </div>

          {!result &&
          (<div className="col-12 mt-3  mybtns">
            <button
              className="btn col-6 "
              disabled={!valid}
              onClick={() => {
                submeitdata();
              }}
            >
              {" "}
              {t('send')}
            </button>
          <span className=" text-danger  d-block col-6">
            {!valid && t("you must to answer all quistions")}
          </span>
          </div>)
          }

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
                {userdata &&
                  userdata.full_name}
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
                      <option value="Selfe" className="">
                      Selfe
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
                      localStorage.getItem("user_data") & localStorage.getItem("user_data")!='null'  &&userdata.group[0]&&userdata.group[0].title}

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
      <button
        className="d-none "
        id="model2"
        data-bs-target="#exampleModalToggle4"
        // data-bs-target="#exampleModalToggle4"
        // data-bs-toggle="modal"
        data-bs-toggle="modal"
      ></button>
      <div
        className="done modal fade"
        id="exampleModalToggle4"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel4"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          {/* Modal Content */}
          <div className="modal-content w-75 p-5">
            <div className="modal-header text-center p-0">
              <button
                type="button"
                className="btn-close close-login d-none"
                data-bs-dismiss="modal"
                id="close2"
                aria-label="Close"
              ></button>

              <h1 className="modal-title mb-0" id="exampleModalToggleLabel4">
                {t("sucsedt")}
              </h1>

              <img className="right-img mt-4" src={rightLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentData;
