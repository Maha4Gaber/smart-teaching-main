import React, { useEffect, useState } from "react";
// import ServicesHeader from "../../Components/ServicesHeader/ServicesHeader";
// import CourseHeader from "../../Components/CourseHeader/CourseHeader";
// import { ClassRoom } from "../../Components/CalassRoom/ClassRoom";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "./CourseDetails.css";
import { useTranslation } from "react-i18next";
function CourseDetails() {
  const { t, i18n } = useTranslation();
const lang = i18n.language;
  let navigate = useNavigate();
  const params = useParams();
  const [course, setCourse] = useState([]);
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v1/courses/" + params.id).then((res) => {
          console.log(res.data);
          setCourse(res.data);
          setHtmlContent(res.data.description_en);

          if (res.data.status != "open") {
            let model = document.querySelector("#open-modal");
            model.click();

            // navigate('/courses')
          }
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
                <h2>{lang=='en'?course.title_en:course.title_ar}</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="row mar_120  ">
          <div className=" bg-light col-12 mt-5">
            <p className="" dangerouslySetInnerHTML={{ __html: htmlContent }}></p>
          </div>
          <div className="col-lg-5 bg-light col-md-12 mt-5">
            <div className="row left_profile">
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-6 userlable"> {t('Instructor')}</div>
                  <div className="col-6 userdata">{course.instructor}</div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-6 userlable"> {t('SLevel')}</div>
                  <div className="col-6 userdata">{course.skill_level}</div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-6 userlable"> {t('status')} </div>
                  <div className="col-6 userdata">{course.status}</div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-6 userlable"> {t('type')}</div>
                  <div className="col-6 userdata">{course.type}</div>
                </div>
              </div>
              <div className="col-12 mt-3">
                <div className="row">
                  <div className="col-6 userlable"> {t('price')}</div>
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
      <button
        type="button"
        className=" d-none btn btn-primary"
        id="open-modal"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-danger">
              The Course doesn't start yet
            </div>
            <div className="modal-footer">
              <Link
                type="button"
                data-bs-dismiss="modal"
                // to="/courses"
                className="btn btn-secondary"
                onClick={()=>{
                  navigate('/courses')
                }}
              >
                Close
              </Link>
              {/* <Link type="button"  className="btn btn-primary">Understood</Link> */}
            </div>
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
