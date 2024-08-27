import React from "react";
import { FaCheck } from "react-icons/fa6";
import { benefitsDetails } from "../../../data";
import "./BenefitsPlan.css";
// Import Memberships Plans Imgs
import plan1 from "../../../../src/assests/MemberShip/img1.png";
import plan2 from "../../../../src/assests/MemberShip/img2.png";
import plan3 from "../../../../src/assests/MemberShip/img3.png";
import plan4 from "../../../../src/assests/MemberShip/img4.png";
import { useTranslation } from "react-i18next";
const BenefitsPlan = () => {
  const { t ,i18n} = useTranslation();
  const lang = i18n.language;
  let ar = lang == "en" ? 'text-start' : 'text-end';
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
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>{t('BenefitsPlanth1th1')}</th>
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
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>{t('BenefitsPlanth1th2')}</th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              -
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              -
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              {t('contactUs')}
            </th>
            <th scope="col" colSpan="1" style={{ width: "16.67%" }}>
              {t('contactUs')}
            </th>
          </tr>
        </thead>
        <thead></thead>

        <tbody>
          {benefitsDetails.map(({ head, plan }, id) => (
            < >
              <th scope="row" rowSpan={plan.length+1}  className=" head ">
              <div  className={`head h-100 plan${id} `}>
              {t(head)}
              </div>
              </th>
              
              {plan.map(({ title, cases }, idx) => (
                <tr key={idx} className={` subplan${id} `}  >
                <th className={ar} >{t(title)} </th>
              {cases.map((item, idx) => (
                <td key={idx}>{item.case && <FaCheck />}</td>
              ))}
              <br />
                </tr>


              ))}

              
            </>
          ))}
          <tr className="">
            <th className=""></th>
            <th className="">{t('plan48')}</th>
            <th ></th>
            <th >1</th>
            <th >10</th>
            <th >20</th>
            </tr>
            <tr className="">
            <th className=""></th>
            <th className=""></th>
            <th ><div className="w-100 text-center join">{t('joinUs')}</div></th>
            <th ><div className="w-100 text-center join">{t('joinUs')}</div></th>
            <th ><div className="w-100 text-center join">{t('joinUs')}</div></th>
            <th ><div className="w-100 text-center join">{t('joinUs')}</div></th>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BenefitsPlan;
