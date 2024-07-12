import axios from "axios";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import './SmartEducationACdetails.css'
const SmartEducationACdetails = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const [teammember, setteammember] = useState([]);
  // const navigate=useNavigate()
  const {slug } = useParams()
  useEffect(() => {
    // console.log(slug);
    const getdata = async () => {
      try {
        await axios.get("api/v2/team/" + slug).then((res) => {
          // console.log(res.data);
          setteammember(res.data);
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
    <div className="pt-5 mt-5  bg-light">
      <div className="py-5 mar_120 ">
        <div className="text-center fs-2  ">
        {lang=='en'?teammember.title_en:teammember.title_ar}
        </div>
        <div className="w-100 mt-4 align-items-center d-flex justify-content-center" >
          <img className="m-auto myimg " src={teammember.pic} />
        </div>
        <div className="text-center  mt-3 "  dangerouslySetInnerHTML={{ __html: lang=='en'?teammember.description_en:teammember.description_ar }} >
        {}
        </div>
      </div>
    </div>
  );
};

export default SmartEducationACdetails;
