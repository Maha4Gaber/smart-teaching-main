import React, { useState } from "react";
import classes from "./Book.module.css";
import { motion } from "framer-motion";
import ArrowRight from "../../assests/ArrowRight";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Document, Page } from "react-pdf";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "react-bootstrap";

function Book({ book }) {
  const { t } = useTranslation();
  const userData = useSelector((state) => state.userData);
  const [showPDF, setShowPDF] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const canDownload =
    userData.user_data.membership !== null &&
    userData.user_data.membership !== "Free" &&
    userData.user_data.membership !== "Smart Teaching Membership";

  const handleViewPDF = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowPDF(false);
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <motion.div className={classes.book}>
      <div className={classes.book__container}>
        <img className="" alt="bookImg" src={book.image} />
      </div>
      <h4>{book.title}</h4>

      {classes.book__tag && <p className="mb-0">{book.category}</p>}
      <div className={classes.book__tag}>
        <span>{book.type}</span>
        {canDownload ? (
          <a
            href={book.file}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.btnRead}

          >
            {t("Download")} &nbsp; <ArrowRight />
          </a>
        ) : (
          <a
            href={book.file}
            target="_blank"
            rel="noopener noreferrer"
            download="true"
            className={classes.btnRead}
            onClick={(e) => {
              e.preventDefault();
              const link = document.createElement("a");
              link.href = `${book.file}#toolbar=0`;
              link.download = "true";
              link.click();
            }}>
            {t("View Online")} &nbsp; <ArrowRight />
          </a>
        )}
      </div>

      {/* Bootstrap Modal for PDF Viewer */}
      {showModal && (
        <Modal
          size="lg"
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>View Online</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src={`${book.file}#toolbar=0`} // `#toolbar=0` hides the toolbar in many browsers
              width="100%"
              height="600px"
              style={{ border: "none" }}
              title="PDF Viewer"
              sandbox="allow-same-origin allow-scripts allow-forms allow-pointer-lock allow-popups allow-top-navigation allow-presentation"
            ></iframe>
          </Modal.Body>
        </Modal>
      )}
    </motion.div>
  );
}

export default Book;
