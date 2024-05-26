import React, { useEffect, useState } from "react";
import classes from "./SpeedMoter.module.css";
import ReactSpeedometer from "react-d3-speedometer";
import Influeance from "../Influeance/Influeance";
import TeachingInf from "../../assests/Login/Teaching.jpg";
import classroom from "../../assests/Login/Classroom.jpg";
import CirInf from "../../assests/Login/Curricula.jpg";
import HomeInf from "../../assests/Login/Home.jpg";
import SchoolInf from "../../assests/Login/School.jpg";
import StudentInf from "../../assests/Login/Student.jpg";
import TeacherInf from "../../assests/Login/Teacher.jpg";
import ResultInf from "../ResultInf/ResultInf";
import ArrowImg from "../../assests/Arrow.png";
import { useTranslation } from "react-i18next";
import axios from "axios";
import arrowimg from '../../assests/Login/arrow.jpg'

function SpeedMoter() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  let isEn = lang == "en" ? true : false;
  const [rate, setRate] = useState([]);
  const [value, setValue] = useState(0.41);
  const [rank, setRank] = useState(0);
  const [soi, setSoi] = useState("6%");
  const [inful, setInful] = useState();

  function handleStudent(inful) {
    let item = rate.filter((item) => item.influence == inful);
    let singleItem = item[0];
    setRank(singleItem.rank);
    let s = Number(singleItem.size);
    setValue(s);
    if (singleItem.category_en.toLowerCase() === "student") {
      isEn ? setSoi("33%") : setSoi("62%");
    } else if (singleItem.category_en.toLowerCase() === "home") {
      isEn ? setSoi("62%") : setSoi("33%");
    } else if (singleItem.category_en.toLowerCase() === "teaching") {
      isEn ? setSoi("4%") : setSoi("90%");
    } else if (singleItem.category_en.toLowerCase() === "teacher") {
      isEn ? setSoi("19%") : setSoi("76%");
    } else if (singleItem.category_en.toLowerCase() === "school") {
      isEn ? setSoi("47.5%") : setSoi("47.5%");
    } else if (singleItem.category_en.toLowerCase() === "curricula") {
      isEn ? setSoi(" 76%") : setSoi("19%");
    } else if (singleItem.category_en.toLowerCase() === "classroom") {
      isEn ? setSoi(" 90%") : setSoi("4%");
    }
  }

  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v3/influences").then((res) => {
          setRate(res.data);
          console.log(res);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getdata();
  }, []);
  return (
    <section className={classes.influncers}>
    <div className="pt-5"></div>
      <h6>{t("learnImpactOfFactors")}</h6>
      <div className={classes.inf__images}>
        <Influeance img={TeachingInf} title="teaching" />
        <Influeance img={TeacherInf} title="teacher" />
        <Influeance img={StudentInf} title="student" />
        <Influeance img={SchoolInf} title="school" />
        <Influeance img={HomeInf} title="HOME" />
        <Influeance img={CirInf} title="Curricula" />
        <Influeance img={classroom} title="Classroom" />
      </div>
      <div className={classes.green_bar}>
        <div className={classes.baro_needle} style={{ left: soi }}>
          <img src={ArrowImg} />
        </div>
      </div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-2">
        <img className="" src={arrowimg} />
        </div>
      </div>
      <div className={classes.inf__selcets}>
        <select
          value={inful}
          className={classes.select}
          onChange={(e) => {
            setInful(e.target.value);
            handleStudent(e.target.value);
          }}
        >
          <option>{t('Select')}</option>
          {rate.map((item, id) => (
            <option key={id} value={item.influence}>
              {isEn ? item.influence_en : item.influence_ar}
            </option>
          ))}
        </select>
        <ResultInf title={t("rank")} value={rank} />
        <ResultInf title={t("size")} value={value} />
      </div>
      <div className={classes.speed__moter}>
        <ReactSpeedometer
          value={value}
          maxValue={1.5}
          maxSegmentLabels={5}
          segments={4}
          minValue={-0.5}
          segmentColors={["firebrick", "tomato", "gold", "limegreen"]}
          customSegmentStops={[-0.5, 0, 0.2, 0.41, 1.5]}
          textColor="#000"
        />
      </div>
    </section>
  );
}

export default SpeedMoter;
{
  /* <ReactSpeedometer
          value={value}
          maxValue={6}
          maxSegmentLabels={5}
          segments={4}
          textColor="#000"
        /> */
}
