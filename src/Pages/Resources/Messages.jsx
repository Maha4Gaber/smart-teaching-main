import React, { useEffect, useState } from "react";
import ServicesHeader from "../../Components/ServicesHeader/ServicesHeader";
import axios from "axios";
import { motion } from 'framer-motion';
import './Messages.css'
import { useTranslation } from "react-i18next";
function Messages() {
  const { t, i18n } = useTranslation();
  const [mesagess, setmesagess] = useState([]);


  useEffect(() => {
    const getdata = async () => {
      try {
          await axios.get("api/v3/messages").then((res) => {
          console.log(res.data);
          setmesagess(res.data)
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
      <ServicesHeader title="Messages" bold />
      <div className="resource__layout bg-transparent">
      <motion.div
      className='resource__card'
      // onClick={onShow}
      whileHover={{
        backgroundColor: 'rgb(33, 74, 74)',
        color: '#fff',
      }}
    >
      <div className="  bg-transparent">
        {mesagess.map((mesages, idx) => (
          
          <div key={idx} id={mesages.id} className=" mbox w-100 p-4 " >
          <h6 className=""> {t('sender')} :  <span>{mesages.sender.full_name} </span></h6> 
          <h6 className=""> {t('subject')}    <span className="">  {mesages.subject}</span></h6>
          
          <h6 className=""> {t('body')} :  </h6>
          <div className=" mbody ">{mesages.body}</div>
          </div>
        ))
        }
      </div>
      </motion.div>
      </div>
    </>
  );
}

export default Messages;
