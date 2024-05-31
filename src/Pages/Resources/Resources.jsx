import React, { useEffect, useState } from "react";
import ServicesHeader from "../../Components/ServicesHeader/ServicesHeader";
import ResocuresCard from "../../Components/ResourcesCard/ResocuresCard";
import Pagination from "../../Components/Pagination/Pagination";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import RescourseDesc from "../../Components/RescourseDesc/RescourseDesc";
import axios from "axios";
function Resources() {
  const [show, setShow] = useState(false);
  const [articls, setarticls] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v3/articles/").then((res) => {
          console.log(res.data);
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
      <ServicesHeader title="Resources" bold />
      <div className="resource__layout  bg-transparent">
        {articls.map((articl, idx) => (
          <ResocuresCard key={idx} onShow={handleShow} />
        ))}

        {/* <Pagination /> */}
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
        <RescourseDesc onHiden={handleClose} />
      </Modal>
    </>
  );
}

export default Resources;
