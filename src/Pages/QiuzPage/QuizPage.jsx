import React from 'react';
import './QuizPage.css';
import CourseHeader from '../../Components/CourseHeader/CourseHeader';
import QuizRoom from '../../Components/QuizRoom/QuizRoom';
const QuizPage = () => {
  return (
    <div className='quiz__layout'>
      <CourseHeader
        heading='Quiz 1'
        linkone='Course name'
        linktow='Lec Name'
      />
      <QuizRoom />
    </div>
  );
};

export default QuizPage;
