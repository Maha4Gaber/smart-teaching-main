import React, { useEffect, useState } from "react";
import classes from "./SpeedMoter.module.css";
import ReactSpeedometer from "react-d3-speedometer";
import Influeance from "../Influeance/Influeance";
import TeachingInf from "../../assests/Teaching.png";
import CirInf from "../../assests/Curricula.png";
import HomeInf from "../../assests/Home.png";
import SchoolInf from "../../assests/School.png";
import StudentInf from "../../assests/Student.png";
import TeacherInf from "../../assests/Theacher.png";
import ResultInf from "../ResultInf/ResultInf";
import ArrowImg from "../../assests/Arrow.png";
import { useTranslation } from "react-i18next";
import axios from "axios";


function SpeedMoter() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  let isEn = lang == "en" ?true: false;
  const [rate, setRate] = useState([]);
  const [value, setValue] = useState(1);
  const [rank, setRank] = useState(0);
  const [soi, setSoi] = useState("6%");
  const [inful, setInful] = useState("ADHD");
  
  async function getdata(){
    await axios.get('api/v3/influences/')
    .then(res=>{
      setRate(res.data)
      setValue(res.data[0].size);
      setRank(res.data[0].rank);
    })
  }
  getdata()
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
    let item = rate.filter((item) => item.influence === inful);
    let singleItem = item[0];
    console.log(item);
    setTimeout(() => {
      setRank(singleItem.rank);
      setValue(singleItem.size);
      if (singleItem.category_en.toLowerCase() === "student") {
        // setSoi("57%");
        isEn?setSoi('48%'):setSoi("48%")
      } else if (singleItem.category_en.toLowerCase() === "home") {
        isEn?setSoi('7%'):setSoi("90%")
        // setSoi("23%");
      } else if (singleItem.category_en.toLowerCase() === "teaching") {
        isEn?setSoi('90%'):setSoi("6%")
      }
      else if (singleItem.category_en.toLowerCase() === "teacher") {
        isEn?setSoi('69%'):setSoi("27%")
        // setSoi("23%");
      }
      else if (singleItem.category_en.toLowerCase() === "school") {
        isEn?setSoi('27%'):setSoi("69%")
        // setSoi("23%");
      }
    }, 500);
  }, [inful]);
  return (
    <section className={classes.influncers}>
      <h6>{t("learnImpactOfFactors")}</h6>
      <div className={classes.inf__images}>
        {/* <Influeance img={CirInf} title="" /> */}
        <Influeance img={HomeInf} title="HOME" />
        <Influeance img={SchoolInf} title="school" />
        <Influeance img={StudentInf} title="student" />
        <Influeance img={TeacherInf} title="teacher" />
        <Influeance img={TeachingInf} title="teaching" />
      </div>
      <div className={classes.green_bar}>
        <div className={classes.baro_needle} style={{ left: soi }}>
          <img src={ArrowImg} />
        </div>
      </div>
      <div className={classes.inf__selcets}>
        <ResultInf title="rank" value={rank} />
        <select value={inful} onChange={(e) => setInful(e.target.value)}>
            {rate.map((item,id) => (
            <option key={id} value={item.influence}>{isEn?item.influence_en:item.influence_ar}</option>
          ))}
        </select>
        <ResultInf title="Effect Size" value={value} />
      </div>
      <div className={classes.speed__moter}>
        <ReactSpeedometer
          value={value}
          maxValue={2}
          maxSegmentLabels={5}
          segments={4}
          minValue={-1}
          segmentColors={["firebrick", "tomato", "gold", "limegreen"]}
          customSegmentStops={[-1,-.5, 0,1,2]}
          textColor="#000"
        />
      </div>
    </section>
  );
}

export default SpeedMoter;
{/* <ReactSpeedometer
          value={value}
          maxValue={6}
          maxSegmentLabels={5}
          segments={4}
          textColor="#000"
        /> */}