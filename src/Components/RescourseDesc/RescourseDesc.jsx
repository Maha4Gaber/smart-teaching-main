import React, { useEffect, useState } from 'react';
import SmartText from '../SmartText/SmartText';
import classes from './RescourseDesc.module.css';
import Modal from "react-bootstrap/Modal";
const RescourseDesc = ({desc,show, onHiden }) => {
  const [htmlContent, setHtmlContent] = useState(desc);
  useEffect(()=>{
    setHtmlContent(desc);



}, [])
  return (
    <Modal
        show={show}
        onHide={onHiden}
        animation={true}
        fullscreen="xl-down"
        size="xl"
        className="w-100 "
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
      <div className={classes.description}>
      <button >
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
      <dev className="" dangerouslySetInnerHTML={{ __html: desc }} >
        
      </dev>
    </div>
        {/* <RescourseDesc desc={articl.description} onHiden={handleClose} /> */}
      </Modal>
  );
};

export default RescourseDesc;
