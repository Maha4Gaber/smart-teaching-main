import React, { useEffect, useState } from 'react';
import classes from './SpeedMoter.module.css';
import ReactSpeedometer from 'react-d3-speedometer';
import Influeance from '../Influeance/Influeance';
import TeachingInf from '../../assests/Teaching.png';
import CirInf from '../../assests/Curricula.png';
import HomeInf from '../../assests/Home.png';
import SchoolInf from '../../assests/School.png';
import StudentInf from '../../assests/Student.png';
import TeacherInf from '../../assests/Theacher.png';
import ResultInf from '../ResultInf/ResultInf';
import ArrowImg from '../../assests/Arrow.png';
import { useTranslation } from 'react-i18next';
let rate = [
  {
    title: 'SSRGSE',
    rank: 1,
    value: 1.44,
    soi: 'student',
  },
  {
    title: 'SSRG',
    rank: 1.3,
    value: 2.5,
    soi: 'teacher',
  },
  {
    title: 'SSR',
    rank: 1.4,
    value: 3.44,
    soi: 'home',
  },
];
function SpeedMoter() {
  const {t} = useTranslation()
  const [value, setValue] = useState(55);
  const [rank, setRank] = useState(0);
  const [soi, setSoi] = useState('6%');
  const [inful, setInful] = useState(
    'SSRGSE',
  );
  let newValue = 0;
  function handleStudent() {
    newValue = (100 * 1.44) / 4;
    setValue((value) => newValue);
  }
  function handleTeacher() {
    newValue = (100 * 2.5) / 4;
    setValue((value) => newValue);
  }
  function HandleHome() {
    newValue = (100 * 3.44) / 4;
    setValue((value) => newValue);
  }
  useEffect(() => {
    let item = rate.filter((item) => item.title === inful);
    let singleItem = item[0];
    setRank(singleItem.rank);
    setValue(singleItem.value);
    if (singleItem.soi === 'student') {
      setSoi('57%');
    } else if (singleItem.soi === 'home') {
      setSoi('23%');
    } else if (singleItem.soi === 'teacher') {
      setSoi('74%');
    }
  }, [inful]);
  return (
    <section className={classes.influncers}>
      <h6>
        {t("learnImpactOfFactors")}
      </h6>
      <div className={classes.inf__images}>
        <Influeance
          img={CirInf}
          title=''
        />
        <Influeance
          img={HomeInf}
          title='HOME'
        />

        <Influeance
          img={SchoolInf}
          title='school'
        />
        <Influeance
          img={StudentInf}
          title='student'
        />
        <Influeance
          img={TeacherInf}
          title='teacher'
        />
        <Influeance
          img={TeachingInf}
          title='teaching'
        />
      </div>
      <div className={classes.green_bar}>
        <div
          className={classes.baro_needle}
          style={{ left: soi }}
        >
          <img src={ArrowImg} />
        </div>
      </div>
      <div className={classes.inf__selcets}>
        <ResultInf
          title='rank'
          value={rank}
        />
        <select
          value={inful}
          onChange={(e) => setInful(e.target.value)}
        >
          {rate.map((item) => (
            <option value={item.title}>{t(item.title)}</option>
          ))}
        </select>
        <ResultInf
          title='Effect Size'
          value={value}
        />
      </div>
      <div className={classes.speed__moter}>
        <ReactSpeedometer
          value={value}
          maxValue={4}  
          maxSegmentLabels={5}
          segments={4}
          segmentColors={['firebrick', 'tomato', 'gold', 'limegreen']}
          customSegmentStops={[0, 0.9, 1.5, 2.5, 4]}
          textColor='#000'
        />
      </div>
    </section>
  );
}

export default SpeedMoter;
