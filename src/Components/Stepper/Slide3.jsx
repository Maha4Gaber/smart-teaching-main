import React, { useEffect, useRef, useState } from "react";
import { Chart } from "react-google-charts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useTranslation } from "react-i18next";
import AssessmentData from "../AssessmentData/AssessmentData";
import { useReactToPrint } from "react-to-print";
import { useNavigate } from "react-router-dom";

const Slide3 = ({ data, title }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  let isRTL = lang == "en" ? "ltr" : "rtl";
  let ar = lang == "en" ? true : false;
  const navigate = useNavigate();
  useEffect(() => {
    // setTimeout(() => {
    //   handlePrint()

    // }, 100);
    localStorage.title = title;
    console.log(data);
  }, []);

  // const data = JSON.parse(localStorage.getItem("data"));
  // var currentTime = new Date();
  // console.log(data);

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  var options = {
    // ttitle: "Density of Precious Metals, in g/cm^3",
    // width: 600,
    // height: 400,
    bar: { groupWidth: "50%" },
    legend: { position: "none" },
  };

  function printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then((canvas) => {
      let imgWidth = 208;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }
  return (
    <div>
      <div className=" bg  " style={{ direction: isRTL }} id="divToPrint">
        <div ref={componentRef}>
          <AssessmentData title={title} result={true} />
          <div className="row text-center ">
            {/* <div className="col-12 p-3 text-center ">
        <h1>{t('Teacherevaluationresults')}</h1>
      </div>
      <div className="col-6 fs-3 ">
        <strong>{t('name')} : </strong>{JSON.parse(localStorage.getItem("user_data")).full_name}
      </div>
      <div className="col-6 fs-3">
        <strong>{t('date')} : </strong> 
        
        {new Date().toISOString().slice(0,10)}
      </div> */}
            <div className="col-12  chart">
              {data.map((item, idx) => (
                <div key={idx} className="row my-2">
                  {idx !== 0 && (
                    <>
                      <div
                        className="col-6     "
                        style={{
                          fontSize: "14px",
                          // textAlign:ar?'right':'left'
                          textAlign: "right",
                        }}
                      >
                        {item[0]}{" "}
                      </div>
                      <div
                        className="col-6 d-flex fs-6"
                        style={{
                          fontSize: "3px",
                        }}
                      >
                        <div
                          className=" mx-2 "
                          style={{
                            width: item[1] + "%",
                            height: "20px",
                            backgroundColor: item[2],
                            fontSize: "13px",
                            textAlign: "right",
                            color: "#fff",
                          }}
                        >
                          {item[1] + " %"}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}

              {data.length !== 0 && (
                <div className="row">
                  <div className="col-6  "></div>
                  <div className="col-6  d-flex ">
                    {/* <span className=" text-start  ">0</span> */}
                    <span className="">10</span>
                    <span className="">20</span>
                    <span className="">30</span>
                    <span className="">40</span>
                    <span className="">50</span>
                    <span className="">60</span>
                    <span className="">70</span>
                    <span className="">80</span>
                    <span className="">90</span>
                    <span className=" text-end">100</span>
                  </div>
                </div>
              )}
              {/* <Chart
          chartType="BarChart"
          width="100%"
          height="300px"
          data={data}
          className=""
          options={options}
        /> */}
            </div>
            {/* <div className="col-12 mt-1">
              <h4>{t('Teacherevaluationreport')}</h4>
        <div className="table-responsive">
          <table className=" table-hover align-middle"
            >
            <thead className="table-light">
              <tr style={{ backgroundColor: "#f2f2f2 " }}>
                <th style={{ width: "20%" }}>{t("level")} </th>
                <th style={{ width: "20%" }}>{t("standard")} </th>
                <th style={{ width: "100%" }}>{t("description")} </th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="px-2 " style={{ backgroundColor: "rgb(149 193 255) " }}>
                <td scope="row">87.51 - 100</td>
                <td>{t("expert")}</td>
                <td>{t("level1desc")}</td>
              </tr>
              <tr className="px-2 " style={{ backgroundColor: "rgb(146 255 146) " }}>
                <td scope="row">62.51 - 87.50</td>
                <td>{t("experiencd")}</td>
                <td>{t("level2desc")}</td>
              </tr>
              <tr className="px-2 " style={{ backgroundColor: "#ffbf0078 ",
                padding:'10px'
               }} >
                <td scope="row" >37.51 - 62.50</td>
                <td>{t("devolop")}</td>
                <td>{t("level3desc")}</td>
              </tr>
              <tr className="px-2 " style={{ backgroundColor: "rgb(245 171 171)" }}>
                <td scope="row ">25.00 - 37.51</td>
                <td>{t("junior")}</td>
                <td>{t("level4desc")}</td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      </div> */}
          </div>
        </div>
        {data.length !== 0 && (
          <>
            <div className="row align-items-center justify-content-center ">
              <button
                onClick={() => {
                  navigate("/pdf");
                }}
                style={{ width: "fit-content", display: "block" }}
                className="m-5 print text-white  green-bg wf "
              >
                {t("GPrint")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Slide3;
