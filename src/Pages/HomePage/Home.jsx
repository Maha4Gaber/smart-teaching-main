import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import Blogs from "../../Components/Blogs/Blogs";
import Slider from "react-slick";
import Courses from "../../Components/courses/Courses";
import "./Home.css";
import parse from "html-react-parser";

// Import Components
import BgImg from "./../../Components/BgImg/BgImg";
import FooterLinks from "../../Components/FooterLinks/FooterLinks";
import ImageComp from "../../Components/ImageComp/ImageComp";
import EvidenceDesc from "../../Components/EvidenceDesc/EvidenceDesc";

// Import Images
import aboutImg from "../../assests/about-left.jpg.png";
import evidenceOne from "../../assests/evidence-1.png";
import evidenceTwo from "../../assests/evidence-2.png";
import evidenceThree from "../../assests/evidence-3.png";

// Import data
import {
  evidence,
  homeFeatures,
  homeTeam,
  partners,
  serviceCards,
} from "../../data";

// Icons
import { SiGooglemessages } from "react-icons/si";
import { BiLeftArrow, BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import TeamCards from "../../Components/TeamCards/TeamCards";
import FeatureCards from "../../Components/FeatureCards/FeatureCards";
import { useTranslation } from "react-i18next";
import { fetchinfluences } from "../../Slices/home/influences";
import { addToken } from "../../Slices/User/User";

const Home = () => {
  const {  i18n } = useTranslation();
  const lang = i18n.language;
  let isRTL = lang == "en" ? "ltr" : "rtl";
  const token = useSelector((state)=>state.userData.token)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(addToken())
  },[])
  //  const blogs = useSelector((state) => state.influences);
  //  const dispatch = useDispatch();
  //  const navigate = useNavigate();
  //  useEffect(() => {
  //    dispatch(fetchinfluences());
  //   setTimeout(() => {
  //    console.log(blogs);
  //   }, 10);
  //  }, [5]);




  const { t } = useTranslation();
  const settings2 = {
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1530,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 523,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
    ],
  };

  return (
    <main className="  position-relative">
      <figure className=" main-img main-home-img d-flex  ">
        <figcaption data-aos="fade-right">
          <h1 className=" " style={{  }}>
            {t("newSystematic")}     {t("approachToMax")}           {t("yourStudents")}
          {/* </h1> */}
          {/* <h1 className=" " style={{  }}> */}
            {/* {t("approachToMax")}  */}
          {/* </h1> */}
          {/* <h1 className=" " style={{  }}> */}
          <button className="">
            <Link to="/login" className="p-0     text-dark">
              {t("getStarted")} 
              {
                isRTL=='ltr'?(<BiRightArrowAlt className="ms-3 fs-4" />):(<BiLeftArrowAlt className="ms-3 fs-4" />)
              }
            
              {" "}
            </Link>
          </button>
          </h1>

        </figcaption>
      </figure>
      <Link to="/contactus" className="contact-link d-flex align-items-center">
        <SiGooglemessages className="contact-icon-box" />
      </Link>
      <div className="mar_120">
        
      {/* Partners Section */}
      <section
        className="partner-home  ptner-home"
        data-aos="zoom-in"
      >
        <h1 className="text-center ">{t("stsPartner")}</h1>

        <div className="row">
          <Slider {...settings2}>
            {partners?.map((partner, idx) => (
              <div
                className="section-padding d-flex justify-content-center align-items-center"
                key={idx}
              >
                <div
                  key={idx}
                  className="overflow-hidden custom-size position-relative"
                >
                  <ImageComp src={partner.img} alt="Our Clients" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* About Section */}
      <section className="about-home py-4 ">
        <div className="row ">
          <div className="col-lg-4 col-md-7" data-aos="fade-right">
            <ImageComp src={aboutImg} />
          </div>
          <div className="col-lg-7 col-md-5  " data-aos="fade-left">
            <div className="">
              {/* <h5 className="green-color mb-1">{t("aboutUs")}</h5> */}
              <h2 className="blue-color head-title mb-3">
                {t("smartTeachingSystem")}
                <small>®</small>
              </h2>
              <p className="silver-color mb-5">{parse(t("aboutUsDetails"))}</p>
              <button>
                {" "}
                <Link
                  className="p-0 text-dark d-flex align-items-center"
                  to="/expertteacher"
                >
                  {" "}
                  {t(
                    "getStarted"
                  )} {
                isRTL=='ltr'?(<BiRightArrowAlt className="ms-3 fs-4" />):(<BiLeftArrowAlt className="ms-3 fs-4" />)
              }{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Evidence Section */}
      <section className="evidence-home py-5 section-pacdding">
        <h1 className="text-center head-title mb-5" data-aos="zoom-in">
          {t("evidenceAndSystematic")} <br />
        </h1>

        <div className="row  py-5">
          <div
            className="col-lg-7 col-sm-12 d-flex align-items-center"
            data-aos="fade-right"
          >
            <EvidenceDesc
              title={t(evidence[0].title)}
              desc={t(evidence[0].desc)}
              className="hide"
            />
          </div>
          <div
            className="col-lg-5 col-sm-12  custom-padding "
            data-aos="fade-left"
          >
            <img src={evidenceOne} className="left" />
          </div>
        </div>

        <div className="row  py-5 ">
          <div
            className="col-lg-5 col-sm-12   custom-padding"
            data-aos="fade-right"
          >
            <img src={evidenceTwo} className="left" />
          </div>

          <div
            className="col-lg-7 col-sm-12 d-flex align-items-center "
            data-aos="fade-left"
          >
            <EvidenceDesc
              title={t(evidence[1].title)}
              desc={t(evidence[1].desc)}
              className="hide"
            />
          </div>
        </div>

        <div className="row  py-4">
          <div className="col-lg-7 col-sm-12" data-aos="fade-right">
            <EvidenceDesc
              title={t(evidence[2].title)}
              desc={t(evidence[2].desc)}
            />
          </div>
          <div
            className="col-lg-5 col-sm-12   custom-padding"
            data-aos="fade-left"
          >
            <img src={evidenceThree} />
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-5 service-home">
        <h5 className="green-color text-center" data-aos="zoom-in">
          {t("services")}
        </h5>
        <h1 className="text-center my-2 fw-bold" data-aos="zoom-in">
          {t("serviceTitle")}
        </h1>
        <p className="text-center" data-aos="zoom-in">
          {t("serviceDetails1")}
          <br /> {t("serviceDetails2")}
        </p>

        <div className="row gy-4">
          {serviceCards.map((card, idx) => (
            <div className="col-md-6 col-lg-3" data-aos="flip-left" key={idx}>
              <ServiceCard {...card} />
            </div>
          ))}
        </div>
      </section>
      <Courses />
      {/* Teachers Section */}
      <section className="py-5 mb-4 teachers-home">
        <h5 className="green-color text-center" data-aos="zoom-in">
          {t("ExpertTeacher")}
        </h5>
        <h1 className="text-center fw-bold" data-aos="zoom-in">
          {t("makeBigDifference")} <br />
          {t("ExpertTeacher")}
        </h1>

        <TeamCards cards={homeTeam} />
      </section>
      {/* <Bg.Img src={logo} /> */}
      <section className="py-5">
        <FeatureCards cards={homeFeatures} />
      </section>
      <Blogs />
      </div>
      {/* Features Section */}
      <FooterLinks />
    </main>
  );
};

export default Home;
