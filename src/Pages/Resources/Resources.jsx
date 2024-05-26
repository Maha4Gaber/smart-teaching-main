import React, { useState } from 'react';
import ServicesHeader from '../../Components/ServicesHeader/ServicesHeader';
import ResocuresCard from '../../Components/ResourcesCard/ResocuresCard';
import Pagination from '../../Components/Pagination/Pagination';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import RescourseDesc from '../../Components/RescourseDesc/RescourseDesc';
function Resources() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ServicesHeader
        title='Resources'
        bold
      />
      <div className='resource__layout  bg-transparent'>
        <ResocuresCard onShow={handleShow} />
        <ResocuresCard onShow={handleShow} />
        <ResocuresCard onShow={handleShow} />
        <ResocuresCard onShow={handleShow} />
        <ResocuresCard onShow={handleShow} />

        {/* <Pagination /> */}
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        fullscreen='xl-down'
        size='xl'
        className='w-100'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <RescourseDesc onHiden={handleClose} />
      </Modal>
    </>
  );
}

export default Resources;
