import React, { useEffect, useState } from "react";
// import ServicesHeader from "../../Components/ServicesHeader/ServicesHeader";
// import CourseHeader from "../../Components/CourseHeader/CourseHeader";
// import { ClassRoom } from "../../Components/CalassRoom/ClassRoom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "./CourseDetails.css";
function CourseDetails() {
  let navigate = useNavigate();
  const params = useParams();
  const [course, setCourse] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v1/courses/" + params.id).then((res) => {
          // console.log(res.data);
          setCourse(res.data);
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
  const docs = [
    {
      uri: "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt",
      fileType: "ppt",
      fileName: "future.ppt",
    },
  ];
  // let url='https://calibre-ebook.com/downloads/demos/demo.docx  '
  // let url='https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls  '
  let url = "https://sample-videos.com/ppt/Sample-PPT-File-500kb.ppt  ";

  // return ;
  return (
    <>
      <div className=" container-fluid profile">
        <div className="profile_header">
          <div className="profile_info ">
            <div className="col-6">
              <img className=" w-100" src={course.image} />
            </div>
            <div className="col-8">
              <div className="profile_data  ">
                <h6>{course.category}</h6>
                <h2>{course.title}</h2>
                <p className=""> {course.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mar_120  ">
          <div className="col-lg-5 bg-light col-md-12 mt-5">
            <div className="row left_profile">
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-6 userlable"> Instructor</div>
                  <div className="col-6 userdata">{course.instructor}</div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-6 userlable"> Skill Level</div>
                  <div className="col-6 userdata">{course.skill_level}</div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-6 userlable"> Status </div>
                  <div className="col-6 userdata">{course.status}</div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-6 userlable"> Type</div>
                  <div className="col-6 userdata">{course.type}</div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-6 userlable"> Price</div>
                  <div className="col-6 userdata">{course.price}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 bg-light col-md-12 mt-5">
            <iframe
              src={`https://view.officeapps.live.com/op/embed.aspx?src=${url}`}
              width="100%"
              height="600px"
              frameBorder="0"
              // className="mt-5"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseDetails;

{
  /* <CourseHeader
        heading='Course-Details'
        linkone='Home'
        linktow='Course-Details'
      />
      <ClassRoom /> */
}
