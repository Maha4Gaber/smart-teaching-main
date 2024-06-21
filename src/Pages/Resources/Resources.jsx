import React, { useEffect, useState } from "react";
import ServicesHeader from "../../Components/ServicesHeader/ServicesHeader";
import ResocuresCard from "../../Components/ResourcesCard/ResocuresCard";
import Pagination from "../../Components/Pagination/Pagination";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import RescourseDesc from "../../Components/RescourseDesc/RescourseDesc";
import classes from './ResocuresCard.module.css';
import { motion } from 'framer-motion';
// import classes from './RescourseDesc.module.css';
import axios from "axios";
function Resources() {
  const [show, setShow] = useState(false);
  const [articls, setarticls] = useState([]);
  const [articl, setarticl] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v3/articles/").then((res) => {
          // console.log(res.data);
          setarticls(res.data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getdata();
    // }
  }, []);
  return (
    <>
      <ServicesHeader title="resources" bold />
      <div className="rresource__layout mar_120 row bg-transparent">
        {articls.map((articl, idx) => (
          
          <div className="col-lg-3 col-md-4 col-6 mt-3"  key={idx}>
          <motion.div
      className={classes.resource__card}
      onClick={()=>{
        handleShow()
        setarticl(articl.description)
      }}
      whileHover={{
        backgroundColor: 'rgb(33, 74, 74)',
        color: '#fff',
      }}
    >
      <img className="" src={articl.pic} />
      <h4>{articl.title}</h4>
      <ul className={classes.resource__links}>
        {/* <li>Uncategorized /</li> */}
        <li>By /{articl.created_by.full_name} </li>
      </ul>
    </motion.div>
          </div>
        ))}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        fullscreen="xl-down"
        size="xl"
        className="w-100 "
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <div className={classes.description}>
      <button onClick={handleClose} >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
        >
          <g clipPath='url(#clip0_75_3145)'>
            <path
              d='M3.516 20.484C2.36988 19.377 1.45569 18.0529 0.826781 16.5889C0.197873 15.1248 -0.133162 13.5502 -0.147008 11.9568C-0.160854 10.3635 0.142767 8.78331 0.746137 7.30855C1.34951 5.83379 2.24055 4.49397 3.36726 3.36726C4.49397 2.24055 5.83379 1.34951 7.30855 0.746137C8.78331 0.142767 10.3635 -0.160854 11.9568 -0.147008C13.5502 -0.133162 15.1248 0.197873 16.5889 0.826781C18.0529 1.45569 19.377 2.36988 20.484 3.516C22.6699 5.77922 23.8794 8.81045 23.8521 11.9568C23.8247 15.1032 22.5627 18.1129 20.3378 20.3378C18.1129 22.5627 15.1032 23.8247 11.9568 23.8521C8.81045 23.8794 5.77922 22.6699 3.516 20.484ZM13.68 12L17.076 8.604L15.384 6.912L12 10.308L8.604 6.912L6.912 8.604L10.308 12L6.912 15.396L8.604 17.088L12 13.692L15.396 17.088L17.088 15.396L13.692 12H13.68Z'
              fill='#131313'
            />
          </g>
          <defs>
            <clipPath id='clip0_75_3145'>
              <rect
                width='24'
                height='24'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
      </button>
      <dev className="" dangerouslySetInnerHTML={{ __html: articl }} >
        
      </dev>
    </div>
      </Modal>
    </>
  );
}

export default Resources;
