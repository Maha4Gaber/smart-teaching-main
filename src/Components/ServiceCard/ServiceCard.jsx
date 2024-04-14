import React from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';
import {BiRightArrowAlt} from 'react-icons/bi'

import './ServiceCard.css'
import { useTranslation } from 'react-i18next';


const ServiceCard = ({icon, id, title, desc}) => {
    const {t} = useTranslation()
  return (
      <div
          data-aos="fade-up"
          className="service-card py-4 px-4 h-100 d-flex flex-column "
      >
          <div className="service-box d-flex justify-content-between align-items-center mb-4">
              <div className="serviceIcon-box rounded-circle p-3">{icon}</div>
              <div className="serviceNo-box mx-4">{id}</div>
          </div>

          <h2 className="mb-4">{parse(t(title))}</h2>
          <p>{parse(t(desc))}</p>

          <Link to="/services">
              {" "}
              {t("readMore")} <BiRightArrowAlt className="mx-2" />
          </Link>
      </div>
  );
}

export default ServiceCard