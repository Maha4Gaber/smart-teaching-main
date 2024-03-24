import React, { useRef, useState } from "react";
import "./pdf.css";

import { useReactToPrint } from "react-to-print";

import { Chart } from "react-google-charts";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useTranslation } from 'react-i18next';

function Pdf() {
  const {t,i18n} = useTranslation()
  const lang = i18n.language;
  let isRTL = lang =='en'?'ltr':'rtl'

  const tableStyles = {
    borderCollapse: 'collapse',
    direction: isRTL  ,
    maxWidth:'100% !important',
  };
  const data = JSON.parse(localStorage.getItem("data"));
  // console.log(data);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  var options = {
    title: "Motivation Level Throughout the Day",
    hAxis: {
      title: "level",
    },
    vAxis: {
      title: "100%",
    },
  };

  function printDocument() {
    const input = document.body;
    html2canvas(input)
      .then((canvas) => {
        let imgWidth = 208;
        let imgHeight = canvas.height * imgWidth / canvas.width;
        const imgData = canvas.toDataURL('img/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        // pdf.output('dataurlnewwindow');
        pdf.save("download.pdf");
      })
    ;
  }
  return (
    <div>
      <div className="container bg" style={{direction: isRTL  ,}} id="divToPrint" ref={componentRef}>
        <div className="row text-center ">
          <div className="col-12 p-3 text-center ">
            <h1>{t('Teacherevaluationresults')}</h1>
          </div>
          <div className="col-6 fs-3 ">
            <strong>{t('name')} : </strong>{JSON.parse(localStorage.getItem("user_data")).full_name}
          </div>
          <div className="col-6 fs-3">
            <strong>{t('date')} : </strong> {new Date().toISOString().slice(0,10)}
          </div>
          <div className="col-9  chart">
            <Chart
              chartType="ColumnChart"
              width="100%"
              height="400px"
              data={data}
              className=""
              // options={options}
            />
          </div>
          <div className="col-12">
                  <h4>{t('Teacherevaluationreport')}</h4>
            <div className="table-responsive">
              <table className=" table-hover align-middle"
                style={tableStyles}>
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
          </div>
        </div>
      </div>
        <div className="row align-items-center justify-content-center ">
          <button onClick={handlePrint} style={{width: 'fit-content',display:'block',}} className="m-5 print text-white  green-bg wf ">
          {t('Printthisout')}
          </button>
        </div>
    </div>
  );
}
export default Pdf;
