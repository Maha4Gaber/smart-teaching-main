import React from 'react';
import classes from './CertiCard.module.css';
import certififcatinPic from '../../assests/certificate.png';
const CertiCard = () => {
  return (
    <section className={classes.certi_card}>
      <img
        src={certififcatinPic}
        alt='certification'
      />
      <div className={classes.certi_content}>
        <h3>UI UX Design Certificates</h3>
        <p>Student / Abdelrhman Abdelbadea</p>
        <p>The lecturer / Ehab Fayez</p>
        <p>Level / Beginner</p>
        <p>Start Date / 10/07/2023</p>
        <p>End Date/ 10/08/2023</p>
        <p>The Number Of Hours/ 52 h</p>
        <p>Degree/ 92%</p>
        <div>
          <button>Dowmload</button>
        </div>
      </div>
    </section>
  );
};

export default CertiCard;
