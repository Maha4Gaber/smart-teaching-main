import React from "react";
import SidebarLinks from "./../../Components/SidebarLinks/SidebarLinks";
import MemeberShipTypes from "../../Components/MemberShipComponents/MemeberShipTypes/MemeberShipTypes";
import JoinCommunity from "../../Components/MemberShipComponents/JoinCommunity/JoinCommunity";
import { memberShipLinks, membershipsPlans } from "./../../data";
import MemberShipPlan from "../../Components/MemberShipComponents/MemberShipPlan/MemberShipPlan";
import BenefitsPlan from "../../Components/MemberShipComponents/BenefitsPlan/BenefitsPlan";
import "./BeAMember.css";

import { BenefitCards } from "../../data";
import BenefitCard from "../../Components/MemberShipComponents/BenefitsCard/BenefitCard";
import { useTranslation } from "react-i18next";

const BeAMember = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Member Ship Img */}
      <figure className="main-membership-img main-img d-flex align-items-center m-0">
        <figcaption>
          <h1 className="m-0">Become A Member</h1>
        </figcaption>
      </figure>

      <section className="membership">
        <div className="row gy-4">
          <div className="col-3  d-flex flex-column ">
            <MemeberShipTypes />
          </div>

          <div className="col-lg-6 col-12 px-3">
            <JoinCommunity />
          </div>
          <div className="col-3  d-flex flex-column ">
            <SidebarLinks links={memberShipLinks} />
          </div>
        </div>
        <div className="row gy-4">
          <div className="col-12 join-community  p-0  d-flex flex-column ">
            {/* <h4 className='mt-4 mb-5'>Any individual or organisation can register (create an account) and have access to the educational materials.</h4> */}

            <h1 className=" w-100 fs-2 p-3 text-center">
              {t("memberbenefittitle")}
            </h1>

            <div className="row justify-content-center pb-5 px-5 gy-3">
              {BenefitCards.map((card, idx) => (
                <div className="col-xl-4 col-md-6 px-2" key={idx}>
                  <BenefitCard {...card} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-12 join-community  p-0  d-flex flex-column ">
            {/* <h4 className='mt-4 mb-5'>Any individual or organisation can register (create an account) and have access to the educational materials.</h4> */}

            <h1 className=" w-100 fs-2 p-3 text-center">
              {t("membertypetitle")}
            </h1>

            <div className="row justify-content-center pb-5  px-3 g-3">
            {membershipsPlans.map((plan, idx) => (
              <div className="col-lg-3 col-md-6 col-sm-8 gy-2 " key={idx}>
                <MemberShipPlan {...plan} />
              </div>
            ))}
            </div>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-12 join-community  p-0 py-3  d-flex flex-column ">
            <div className="BenefitsPlanheader">   لائحة رسوم الاشتراكات وأجور البرامج والشهادات             </div>
          <BenefitsPlan />
          </div>
        </div>
        {/* <div className="membership-plans">
          <h2>Benefits of Memberships</h2>
          <div className="row px-4 ">
            {membershipsPlans.map((plan, idx) => (
              <div className="col-lg-4 col-md-6 col-sm-8 gy-4" key={idx}>
                <MemberShipPlan {...plan} />
              </div>
            ))}
          </div>

          <BenefitsPlan />
        </div> */}
      </section>
    </>
  );
};

export default BeAMember;
