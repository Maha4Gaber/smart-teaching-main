import { FaCheck } from "react-icons/fa6";
import { benefitsDetails } from "../../../data";
import "./BenefitsPlan.css";
// Import Memberships Plans Imgs
import plan1 from "../../../../src/assests/MemberShip/img1.png";
import plan2 from "../../../../src/assests/MemberShip/img2.png";
import plan3 from "../../../../src/assests/MemberShip/img3.png";
import plan4 from "../../../../src/assests/MemberShip/img4.png";
import { useTranslation } from "react-i18next";
import rightLogo from "../../../assests/Register/right.png";
import axios from "axios";
const BenefitsPlan = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  let ar = lang == "en" ? "text-start" : "text-end";

  async function sendRequest(type) {
    await axios
      .post(`api/v2/create-membership/`, {memberShipType:type})
      .then(() => {
        // console.log(res);

        setTimeout(() => {
          let close = document.querySelector(".done-btn");
          close.click();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(type);
  }

  return (
    <div className="px-0 px-md-3 px-lg-4">
      <table className="table table-bordered text-center">
        <thead className="main-head">
          <tr className="member1">
            <th colSpan="1" scope="col" style={{ width: "16.67%" }}></th>
            <th colSpan="1" scope="col" style={{ width: "27.67%" }}></th>
            <th scope="col" style={{ width: "16.67%" }} colSpan="1">
              <img className="" src={plan4} />{" "}
            </th>
            <th scope="col" style={{ width: "16.67%" }} colSpan="1">
              <img className="" src={plan3} />{" "}
            </th>
            <th scope="col" style={{ width: "16.67%" }} colSpan="1">
              <img className="" src={plan2} />{" "}
            </th>
            <th scope="col" style={{ width: "16.67%" }} colSpan="1">
              <img className="" src={plan1} />{" "}
            </th>
          </tr>
          <tr className="member w-100">
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}></th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}></th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              {t("memberPlanhead1")}
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              {t("memberPlanhead2")}
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              {t("memberPlanhead3")}
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              {t("memberPlanhead4")}
            </th>
          </tr>
          <tr className="member w-100">
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}></th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              {t("BenefitsPlanth1th1")}
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              0
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              10$
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              10$
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              10$
            </th>
          </tr>
          <tr className="member w-100">
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}></th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              {t("BenefitsPlanth1th2")}
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              -
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              -
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              {t("contactUs")}
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              {t("contactUs")}
            </th>
          </tr>
        </thead>
        <thead></thead>

        <tbody>
          {benefitsDetails.map(({ head, plan }, id) => (
            <>
              <th scope="row" rowSpan={plan.length + 1} className=" head ">
                <div className={`head h-100 plan${id} `}>{t(head)}</div>
              </th>

              {plan.map(({ title, cases }, idx) => (
                <tr key={idx} className={` subplan${id} `}>
                  <th className={ar}>{t(title)} </th>
                  {cases.map((item, idx) => (
                    <td key={idx}>
                      {typeof item.case === "boolean"
                        ? item.case && <FaCheck />
                        : item.case}
                    </td>
                  ))}
                  <br />
                </tr>
              ))}
            </>
          ))}
          {/* <tr className="">
            <th className=""></th>
            <th className="">{t('plan48')}</th>
            <th ></th>
            <th >1</th>
            <th >10</th>
            <th >20</th>
            </tr> */}
          <tr className="">
            <th className=""></th>
            <th className=""></th>
            <th></th>
            <th>
              <div
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
                className="w-100  text-center join cursor-pointer"
                onClick={() => sendRequest("Expert")}
              >
                {t("joinUs")}
              </div>
            </th>
            <th>
              <div
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
                className="w-100  text-center join cursor-pointer"
                onClick={() => sendRequest("Expert")}
              >
                {t("joinUs")}
              </div>
            </th>
            <th>
              <div
                data-bs-target="#exampleModalToggle3"
                data-bs-toggle="modal"
                className="w-100  text-center join cursor-pointer"
                onClick={() => sendRequest("Expert")}
              >
                {t("joinUs")}
              </div>
            </th>
          </tr>
        </tbody>
      </table>
      {/* Done Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          {/* Modal Content */}
          <div className="modal-content p-5">
            <div className="modal-header text-center p-0">
              <button
                type="button"
                className="btn-close  done-btn d-none"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>

              <h2 className="modal-title" id="exampleModalToggleLabel3">
                {t("memberMassage")}
              </h2>

              <img className="right-img mt-4" src={rightLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPlan;
