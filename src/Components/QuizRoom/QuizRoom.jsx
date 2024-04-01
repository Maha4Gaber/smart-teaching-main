import React from 'react';
import classes from './QuizRoom.module.css';
import Question from '../Question/Question';
import StatQuiz from '../StatQuiz/StatQuiz';
import QiuzTimer from '../../assests/QiuzTimer';
import Word from '../../assests/Word';
import PowerPointIcon from '../../assests/PowerPointIcon';
import PdfIcon from '../../assests/PdfIcon';
import DownloadIcon from '../../assests/DownloadIcon';
const QuizRoom = () => {
  return (
    <div className={classes.quiz_room}>
      <div>
        <Question
          question='Lorem ipsum dolor sit amet, consectetur?'
          name='first'
          answer1='Lorem ipsum 1'
          answer2='Lorem ipsum 2'
          answer3='Lorem ipsum 3'
          answer4='Lorem ipsum 4'
        />
        <Question
          question='Lorem ipsum dolor sit amet, consectetur?'
          name='second'
          answer1='Lorem ipsum 1'
          answer2='Lorem ipsum 2'
          answer3='Lorem ipsum 3'
          answer4='Lorem ipsum 4'
        />
        <Question
          question='Lorem ipsum dolor sit amet, consectetur?'
          name='third'
          answer1='Lorem ipsum 1'
          answer2='Lorem ipsum 2'
          answer3='Lorem ipsum 3'
          answer4='Lorem ipsum 4'
        />
        <Question
          question='Lorem ipsum dolor sit amet, consectetur?'
          name='forth'
          answer1='Lorem ipsum 1'
          answer2='Lorem ipsum 2'
          answer3='Lorem ipsum 3'
          answer4='Lorem ipsum 4'
        />
        <button className={classes.quiz_btn}>Send</button>
      </div>
      <div className={classes.states}>
        <StatQuiz
          logo={QiuzTimer}
          heading='The Remaining Time'
        >
          <header className={classes.head}>
            {' '}
            <QiuzTimer /> The Remaining Time
          </header>
          <div className={classes.quiz_layout}>
            <p>
              <span>60</span>Second
            </p>
            <p>
              <span>50</span>Minute
            </p>
            <p>
              <span>01</span>Hour
            </p>
          </div>
        </StatQuiz>
        <StatQuiz>
          <header className={classes.head}>
            {' '}
            <DownloadIcon /> Attachments
          </header>
          <div className={classes.quiz_layout}>
            <p>
              <span>
                <PdfIcon />
              </span>
              Book name
            </p>
            <p>
              <span>
                <PowerPointIcon />
              </span>
              Explanation of the lecture
            </p>
            <p>
              <span>
                <Word />{' '}
              </span>
              Homeworks
            </p>
          </div>
        </StatQuiz>
        <StatQuiz>
          <header className={classes.head}>Lectures</header>
          <div className={classes.quiz_layout}>
            <p>First Lecture</p>
            <p>Second Lecture</p>
            <p>Third Lecture</p>
          </div>
        </StatQuiz>
      </div>
    </div>
  );
};

export default QuizRoom;
