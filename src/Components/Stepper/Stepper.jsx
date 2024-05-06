import React, { useState } from "react";
import "./Stepper.css";
import Pdf from "../../Pages/pdf/pdf";
import Instructions from "../Instructions/Instructions";
import {
  ass4EvaluationTable,
  ass4Questions,
  ass4RatingIndicators,
  ass4Structure,
} from "../../data";
import EvaluationTable from "../AssessmentsComponents/EvaluationTable/EvaluationTable";

import AssessmentTable from "../AssessmentsComponents/AssessmentThree/AssessmentTable/AssessmentTable";
import AssessmentData from "../AssessmentData/AssessmentData";
// import { TiTick } from "react-icons/ti";
const Stepper = ({ Questions, tableName,student }) => {
  const steps = [
    {
      step: "Step 1",
      data: "Information",
    },
    {
      step: "Step 2",
      data: "Assessment",
    },
    {
      step: "Step 3",
      data: "Results",
    },
    {
      step: "Step 4",
      data: "Interpretation",
    },
  ];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  return (
    <>
      <div className="content my-5 py-5 ">
        <div className="d-flex  justify-content-between ">
          {steps?.map((step, i) => (
            <div
              key={i}
              className={`step-item ${currentStep === i + 1 && "active"} ${
                (i + 1 < currentStep || complete) && "complete"
              } `}
            >
              <div className="step">
                {i + 1 < currentStep || complete ? (
                  <i className="fa ga-check">V</i>
                ) : (
                  i + 1
                )}
              </div>
              <p className="">{step.step}</p>
              <p className="information">{step.data}</p>
            </div>
          ))}
        </div>
        <div className="body mt-5">
          {currentStep == 1 && (
            <AssessmentData
              type={
                Questions[0].category == "ass4cat1"
                  ? 1
                  : Questions[0].category == "ass3cat1"
                  ? 2
                  : 3
              }
              student={student}
            />
          )}
          {currentStep == 2 && (
            <>
              <EvaluationTable table={ass4EvaluationTable} />
              <AssessmentTable
                Questions={Questions}
                tableName={tableName}
                adjustCell={true}
                btnName="Submit"
              />
            </>
          )}
          {currentStep == 3 && (
            <>
              {/* <AssessmentData result={true} /> */}
              <Pdf />
            </>
          )}
          {currentStep == 4 && (
            <>
              <Instructions />
            </>
          )}
        </div>
        <div className="mybtns">
          <button
            className="btn"
            onClick={() => {
              currentStep === 1
                ? setCurrentStep(1)
                : setCurrentStep((prev) => prev - 1);
              currentStep !== steps.length - 1 && setComplete(false);
            }}
            // disabled={complete}
          >
            {currentStep == 1 ? "" : "Pervious"}
          </button>
          {/* {!complete && ( */}
          <button
            className="btn"
            onClick={() => {
              currentStep === steps.length
                ? setComplete(true)
                : setCurrentStep((prev) => prev + 1);
            }}
            disabled={complete}
          >
            {currentStep === steps.length ? "" : "Next"}
          </button>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default Stepper;

// <div className="col-12 mt-1">
//                   <h4>{t('Teacherevaluationreport')}</h4>
//             <div className="table-responsive">
//               <table className=" table-hover align-middle"
//                 style={tableStyles}>
//                 <thead className="table-light">
//                   <tr style={{ backgroundColor: "#f2f2f2 " }}>
//                     <th style={{ width: "20%" }}>{t("level")} </th>
//                     <th style={{ width: "20%" }}>{t("standard")} </th>
//                     <th style={{ width: "100%" }}>{t("description")} </th>
//                   </tr>
//                 </thead>
//                 <tbody className="">
//                   <tr className="px-2 " style={{ backgroundColor: "rgb(149 193 255) " }}>
//                     <td scope="row">87.51 - 100</td>
//                     <td>{t("expert")}</td>
//                     <td>{t("level1desc")}</td>
//                   </tr>
//                   <tr className="px-2 " style={{ backgroundColor: "rgb(146 255 146) " }}>
//                     <td scope="row">62.51 - 87.50</td>
//                     <td>{t("experiencd")}</td>
//                     <td>{t("level2desc")}</td>
//                   </tr>
//                   <tr className="px-2 " style={{ backgroundColor: "#ffbf0078 ",
//                     padding:'10px'
//                    }} >
//                     <td scope="row" >37.51 - 62.50</td>
//                     <td>{t("devolop")}</td>
//                     <td>{t("level3desc")}</td>
//                   </tr>
//                   <tr className="px-2 " style={{ backgroundColor: "rgb(245 171 171)" }}>
//                     <td scope="row ">25.00 - 37.51</td>
//                     <td>{t("junior")}</td>
//                     <td>{t("level4desc")}</td>
//                   </tr>
//                 </tbody>
//                 <tfoot></tfoot>
//               </table>
//             </div>
//           </div>
