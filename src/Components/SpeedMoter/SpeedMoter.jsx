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
  let isEn = lang == "en" ? true : false;
  const [rate, setRate] = useState([]);
  const [value, setValue] = useState(-0.9);
  const [rank, setRank] = useState(7);
  const [soi, setSoi] = useState("6%");
  const [inful, setInful] = useState("ADHD");

  function handleStudent(inful) {
    let item = rate.filter((item) => item.influence == inful);
    let singleItem = item[0];
    setRank(singleItem.rank);
    let s = Number(singleItem.size);
    setValue(s);
    if (singleItem.category_en.toLowerCase() === "student") {
      isEn ? setSoi("48%") : setSoi("48%");
    } else if (singleItem.category_en.toLowerCase() === "home") {
      isEn ? setSoi("7%") : setSoi("90%");
    } else if (singleItem.category_en.toLowerCase() === "teaching") {
      isEn ? setSoi("90%") : setSoi("6%");
    } else if (singleItem.category_en.toLowerCase() === "teacher") {
      isEn ? setSoi("69%") : setSoi("27%");
    } else if (singleItem.category_en.toLowerCase() === "school") {
      isEn ? setSoi("27%") : setSoi("69%");
    }
  }

  useEffect(() => {
    const getdata = async () => {
      try {
        await axios.get("api/v3/influences/").then((res) => {
          setRate(res.data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getdata();
  }, []);
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
        <select
          value={inful}
          className={classes.select}
          onChange={(e) => {
            setInful(e.target.value);
            handleStudent(inful);
          }}
        >
          {rate.map((item, id) => (
            <option key={id} value={item.influence}>
              {isEn ? item.influence_en : item.influence_ar}
            </option>
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
          customSegmentStops={[-1, -0.5, 0, 1, 2]}
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
