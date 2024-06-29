import React from "react";
import "./Footer.css";
import FooterLinks from "../FooterLinks/FooterLinks";
import SocialFooter from "../SocialFooter/SocialFooter";
import SingleLink from "../SingleLink/SingleLink";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = ({ contactDetails }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();



  return (
    <>
      {" "}
      <div>
        {/* <div className="container-fluid newsletter">
          <h4>{t("subscribeNewsletter")}</h4>

          <div className="input_icon">
            <input placeholder={t("yourName")} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
            >
              <path
                d="M8.5 0.736328C9.56087 0.736328 10.5783 1.15776 11.3284 1.9079C12.0786 2.65805 12.5 3.67546 12.5 4.73633C12.5 5.79719 12.0786 6.81461 11.3284 7.56476C10.5783 8.3149 9.56087 8.73633 8.5 8.73633C7.43913 8.73633 6.42172 8.3149 5.67157 7.56476C4.92143 6.81461 4.5 5.79719 4.5 4.73633C4.5 3.67546 4.92143 2.65805 5.67157 1.9079C6.42172 1.15776 7.43913 0.736328 8.5 0.736328ZM8.5 10.7363C12.92 10.7363 16.5 12.5263 16.5 14.7363V16.7363H0.5V14.7363C0.5 12.5263 4.08 10.7363 8.5 10.7363Z"
                fill="#ACACAC"
              />
            </svg>
          </div>
          <div className="input_icon">
            <input placeholder={t("email")} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            ></svg>
          </div>
          <div className="input_icon">
            <input placeholder={t("phoneNumber")} />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M21.4999 15.6963L16.2299 15.0863L13.7099 17.6063C10.8711 16.1625 8.56368 13.8551 7.1199 11.0163L9.6499 8.48633L9.0399 3.23633H3.5299C2.9499 13.4163 11.3199 21.7863 21.4999 21.2063V15.6963Z"
                fill="#ACACAC"
              />
            </svg>
          </div>
          <button>{t("Subscribe")}</button>
        </div> */}
      </div>
      <footer className="footer pt-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <SocialFooter />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <SingleLink />
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <FooterLinks heading={t("ExpertTeacher")}>
                <li>{t("ExpertTeacher")}</li>
                <li>{t("certifiedExpertTeacher")}</li>
                <li>{t("customisedTraining")}</li>
                <li>{t("inHouseTraining")}</li>
                <li>{t("publicTraining")}</li>
              </FooterLinks>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <FooterLinks heading={t("services")}>
                <li onClick={() => navigate("/services")}>{t("services")}</li>
                <li>{t("EBTS")}</li>
                <li>{t("TPD")}</li>
                <li>{t("TPD")}</li>
                <li>{t("consulting")}</li>
                <li>{t("research")}</li>
              </FooterLinks>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-12">
              <FooterLinks heading="Links">
                <li>
                  <Link to="/quiz">{t("quiz")}</Link>
                </li>
                <li>
                  <Link to="/certification">{t("certification")}</Link>
                </li>
                <li>{t("links")}</li>
                <li>{t("HRD")}</li>
              </FooterLinks>
            </div>
          </div>
        </div>

        {/* <FormFooter /> */}

        {/* <div className="two">
					
					<FooterLinks heading="Blog">
							<li>Blog</li>
							<li>Site map</li>
					</FooterLinks>
			</div> */}
      </footer>
      <p className="end">
        {t("copyright")} © <span>2023</span> {t("copyrightBy")}
      </p>
    </>
  );
};

export default Footer;
