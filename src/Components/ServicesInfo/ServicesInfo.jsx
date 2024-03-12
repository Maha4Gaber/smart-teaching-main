import React from 'react';
import classes from './ServicesInfo.module.css';
import HandPic from './../../assests/left col.png';
import AdTeacher from './../../assests/advTeacher.png';
function ServicesInfo({ expert }) {
  return (
    <div className={`${classes.services__info} `}>
      <div className={classes.info__description}>
        <h3>
          {expert
            ? `"Expert Teacher" training program`
            : `Advanced teacher evaluation methodology
`}
        </h3>
        <p>
          {expert
            ? `   Learn What the Profession is-and What it’s Not The “Expert Teacher”
          program empowers you with proven teaching structure, resources, and
          let you discover what makes this profession great and challenging, and
          how to navigate to success as a professional educator. You will be
          able to embrace trusted and proven strategies, while also forging your
          own solutions to challenges.`
            : `
            How should we measure teacher effectiveness? Assessments are needed to tell whether teachers have developed the classroom teaching skills to be effective with their students. Our system of performance assessment helps track educational progress, flag areas of need, and anchor a continuum of performance.
            The assessment system moves beyond traditional measures to evaluate teachers’ performance.`}
        </p>
      </div>
      <div className={classes.info__left}>
        {expert ? (
          <img
            src={HandPic}
            alt='infoleft'
          />
        ) : (
          <img
            src={AdTeacher}
            alt='infoleft'
          />
        )}
      </div>
    </div>
  );
}

export default ServicesInfo;
