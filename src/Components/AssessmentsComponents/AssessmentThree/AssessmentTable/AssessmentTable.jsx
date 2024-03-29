import React, { useRef, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import axios from "axios";

import "./AssessmentTable.css";
import { useReactToPrint } from "react-to-print";

import { Chart } from "react-google-charts";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const AssessmentTable = ({
  Questions,
  columnHead = null,
  tableName,
  adjustCell,
  btnName,
}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  let isRTL = lang == "en" ? "ltr" : "rtl";
  let isright = lang == "en" ? "5%" : "auto";
  const tableStyles = {
    direction: isRTL,
    left: isright,
  };
  // const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const check = () => columnHead;
  const recievddata = [
    ["Element", "evaluation", { role: "style" }, { role: "annotation" }],
  ];
  const answeredQuestions = [];
  const categoryAverages = {};
  const categoryQuestionCounts = {};

  const handleAnswerClick = (questionId, answerId) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answerId,
    }));
  };
  // console.log();

  let url = "api/v1/TCA/";
  let cat = "ABCDEFGH";
  let nav = true;

  if (Questions[0].category === "ass3cat1") {
    url = "api/v1/COI/";
    cat = "ABCD";
    nav = false;
  } else if (Questions[0].category === "ass5p1cat1") {
    url = "api/v1/SRT/";
    cat = "ABCDEFG";
    nav = false;
  }
  async function handleSendData(values) {
    try {
      let { data } = await axios.post(url, values);

      if (data) {
        // console.log(data);
        let newdata = data.data.percentage_level_score;
        cat = cat.split("");
        cat.forEach((el, index) => {
          let color = "blue";

          if (newdata[el][0] > 25 && newdata[el][0] < 37.5) {
            color = "red";
          } else if (newdata[el][0] > 37.5 && newdata[el][0] < 62.5) {
            color = "yellow";
          } else if (newdata[el][0] < 87.5 && newdata[el][0] > 62.5) {
            color = "green";
          }
          recievddata.push([
            t(Questions[index]["category"]),
            newdata[el][0],
            color,
            newdata[el][1],
          ]);
        });

        localStorage.data = JSON.stringify(recievddata);
        setTimeout(() => {
          nav ?? navigate("/pdf");
        }, 2000);
        // console.log(recievddata);
      }
    } catch (err) {
      console.log(err);
    }
  }
  const printSelectedAnswers = () => {
    Questions.forEach((category, index) => {
      let total = 0;
      let answeredCount = 0;
      let cat = "ABCDEFGH";
      cat = cat.split("");
      category.questions.forEach((question) => {
        const answerId = selectedAnswers[question.id];

        if (answerId !== undefined) {
          answeredCount++;
          total += answerId;
          answeredQuestions.push({
            category: cat[index] + "_score",
            question: question.text,
            answer: answerId,
          });
        }
      });

      if (answeredCount > 0) {
        let avg = total / answeredCount;
        avg = avg.toString();
        avg = avg.slice(0, 2);
        let numavg = Number(avg);
        categoryAverages[cat[index] + "_score"] = numavg;
        categoryQuestionCounts[cat[index] + "_score"] = answeredCount;
      }
    });

    if (
      answeredQuestions.length ===
      Questions[Questions.length - 1].questions[
        Questions[Questions.length - 1].questions.length - 1
      ].id
    ) {
      // console.log('Selected Answers:', answeredQuestions);
      // console.log("Category Averages:", categoryAverages);
      handleSendData(categoryAverages);
      // console.log('Category Question Counts:', categoryQuestionCounts);
    } else {
      console.log("Please answer all questions.");
    }
  };

  const isCalculateButtonDisabled = () => {
    return Questions.some((category) =>
      category.questions.some(
        (question) => selectedAnswers[question.id] === undefined
      )
    );
  };
  // console.log(Questions);

  // console.log(data);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      {columnHead ? (
        <table className="table table-bordered ass-table" style={tableStyles}>
          <thead>
            <tr>
              <td className="position-relative W-23 W-22 W-17 W-18">
                {" "}
                <div className="custom-th position-absolute top-50 start-50 translate-middle">
                  {columnHead.head}
                </div>{" "}
              </td>
              <th rowSpan="2" className="custom-th W-60">
                {" "}
                {columnHead.title}{" "}
              </th>
              {columnHead.answers.map(({ answer }, idx) => (
                <td key={idx} className="text-center position-relative W-5 W-3">
                  <div className="position-absolute top-50 start-50 translate-middle">
                    {answer}
                  </div>
                </td>
              ))}
            </tr>
          </thead>

          <tbody>
            {Questions.map(({ category, answers, questions }, idx) => (
              <React.Fragment key={idx}>
                {questions.map((question, idx) => (
                  <tr key={idx}>
                    {idx === 0 && (
                      <td
                        rowSpan={questions.length}
                        className="W-28 W-23 W-22 W-13 W-18"
                      >
                        <div className="text-dark ">{t(category)}</div>
                      </td>
                    )}

                    <th className="W-60" scope="col">
                      <div style={tableStyles}>{t(question.text)}</div>
                    </th>

                    {[1, 2, 3, 4].map((answerId) => (
                      <td
                        key={answerId}
                        onClick={() => handleAnswerClick(question.id, answerId)}
                        className={
                          selectedAnswers[question.id] === answerId
                            ? "selected text-center cursor-pointer W-5 W-3"
                            : "cursor-pointer W-5 W-3"
                        }
                      >
                        {selectedAnswers[question.id] === answerId && (
                          <div>
                            <FaCheck />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      ) : (
        <table className="table table-bordered ass-table" style={tableStyles}>
          {tableName && (
            <thead>
              <tr>
                <th
                  colSpan={Questions[0].answers.length + 1}
                  className={adjustCell && `p-3 py-4`}
                >
                  {adjustCell ? (
                    <span className=" fw-medium ">{tableName.head}</span>
                  ) : (
                    <div className="L-3">{tableName.head}</div>
                  )}{" "}
                </th>
              </tr>
            </thead>
          )}

          {Questions.map(({ category, answers, questions }, idx) => (
            <React.Fragment key={idx}>
              <thead>
                <tr>
                  <th scope="col" className={adjustCell && `p-3`}>
                    {" "}
                    {adjustCell ? (
                      <span>{t(category)}</span>
                    ) : (
                      <div>{t(category)}</div>
                    )}{" "}
                  </th>

                  {answers.map(({ answer }, idx) => (
                    <td key={idx} className="text-center position-relative">
                      {adjustCell ? (
                        <div className="position-absolute top-50 start-50 translate-middle">
                          {answer}
                        </div>
                      ) : (
                        <span>{answer}</span>
                      )}
                    </td>
                  ))}
                </tr>
              </thead>

              <tbody>
                {questions.map((question, idx) => (
                  <tr key={idx}>
                    <th scope="col" className={adjustCell && `py-3 px-3`}>
                      {adjustCell ? (
                        <span> {t(question.text)}</span>
                      ) : (
                        <div> {t(question.text)}</div>
                      )}
                    </th>

                    {[1, 2, 3, 4].map((answerId) => (
                      <td
                        key={answerId}
                        onClick={() => handleAnswerClick(question.id, answerId)}
                        className={
                          selectedAnswers[question.id] === answerId
                            ? "selected text-center cursor-pointer"
                            : "cursor-pointer"
                        }
                      >
                        {selectedAnswers[question.id] === answerId && (
                          <div>
                            <FaCheck />
                          </div>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </React.Fragment>
          ))}
        </table>
      )}

      <button
        className="submit-ass"
        onClick={printSelectedAnswers}
        disabled={isCalculateButtonDisabled()}
        data-bs-toggle="modal"
        data-bs-target="#exampleModalToggle"
      >
        {t("submit")}
      </button>
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
            Evaluation completed successfully
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      {/* {nav ?? (
      )} */}
      {/* {showError && (
      <div className="alert alert-danger error my-2 py-2">
          Please answer all questions*
      </div>
      )} */}
    </div>
  );
};

export default AssessmentTable;
