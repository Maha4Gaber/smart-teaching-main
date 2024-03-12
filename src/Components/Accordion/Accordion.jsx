import React from 'react';
import Chip from '../Chip/Chip';
import VideoText from '../VideoText/VideoText';
import EyesIcon from '../../assests/EyesIcon';
import Quiz from '../Quiz/Quiz';
export const Accordion = ({ title, time, one, id }) => {
  let background = '#fff';
  let show = 'accordion-collapse collapse';
  if (one) {
    background = '#DEBD63';
    show = 'accordion-collapse collapse show';
  }
  return (
    <div
      id='myaccordion'
      className='accordion '
    >
      <div className='accordion-item mb-4 shadow-none '>
        <h2 className='accordion-header  '>
          <button
            className='accordion-button d-flex gap-3 align-content-center '
            data-bs-toggle='collapse'
            data-bs-target={`#${id}`}
            style={{
              background: background,
              color: '0F0F0F',
              fontSize: '20px',
              fontWeight: 'bold',
              fontFamily: 'roboto',
            }}
          >
            {title}
            <Chip>{time}</Chip>
          </button>
        </h2>
        <div
          id={id}
          className={show}
          data-bs-parent='#myaccordion'
        >
          <div className='accordion-body'>
            <VideoText time='22' />
            <VideoText time='05' />
            <VideoText Lock />
            <VideoText Lock />
            <VideoText Lock />
            <Quiz />
          </div>
        </div>
      </div>
    </div>
  );
};
