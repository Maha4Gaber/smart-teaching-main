import React, { useState } from "react";
import './Instructions.css'
import { useTranslation } from 'react-i18next';


// import { TiTick } from "react-icons/ti";
const Instructions = () => {
  const {t,i18n} = useTranslation()
  const lang = i18n.language;
  let isRTL = lang =='en'?'ltr':'rtl'

  const tableStyles = {
    borderCollapse: 'collapse',
    direction: isRTL  ,
    maxWidth:'100% !important',
  };
  return (
    <>
      <div className="col-12 mt-5">
                  <h4>{t('Teacherevaluationreport')}</h4>
            <div className="mt-5">
              <table className=" mytable"
                style={tableStyles}>
                <thead className="">
                  <tr style={{ backgroundColor: "#f2f2f2 " }}>
                    <th style={{ width: "20%" }}>{t("level")} </th>
                    <th style={{ width: "20%" }}>{t("standard")} </th>
                    <th style={{ width: "100%" }}>{t("description")} </th>
                  </tr>
                </thead>
                <tbody className="">
                  <tr className="px-2 " style={{ backgroundColor: "rgb(233, 50, 107) " }}>
                    <td scope="row">87.51 - 100</td>
                    <td>{t("expert")}</td>
                    <td>{t("level1desc")}</td>
                  </tr>
                  <tr className="px-2 " style={{ backgroundColor: "rgb(48, 191, 206) " }}>
                    <td scope="row">62.51 - 87.50</td>
                    <td>{t("experiencd")}</td>
                    <td>{t("level2desc")}</td>
                  </tr>
                  <tr className="px-2 " style={{ backgroundColor: "rgb(255, 152, 5)",
                    padding:'10px'
                   }} >
                    <td scope="row" >37.51 - 62.50</td>
                    <td>{t("devolop")}</td>
                    <td>{t("level3desc")}</td>
                  </tr>
                  <tr className="px-2 " style={{ backgroundColor: "rgb(92, 175, 34)" }}>
                    <td scope="row ">25.00 - 37.51</td>
                    <td>{t("junior")}</td>
                    <td>{t("level4desc")}</td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
    </>
  );
};

export default Instructions;







