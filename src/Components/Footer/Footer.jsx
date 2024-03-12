import React from 'react';
import './Footer.css';
import FooterLinks from '../FooterLinks/FooterLinks';
import SocialFooter from '../SocialFooter/SocialFooter';
import SingleLink from '../SingleLink/SingleLink';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";


const Footer = ({ contactDetails }) => {
  const navigate = useNavigate();
  const {t} = useTranslation()
  return (
      <>
          {" "}
          <div>
              <div className="container-fluid newsletter">
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
                      >
                          <g clip-path="url(#clip0_1556_10377)">
                              <path
                                  d="M18.5 4.23633H2.5C1.4 4.23633 0.51 5.13633 0.51 6.23633L0.5 18.2363C0.5 19.3363 1.4 20.2363 2.5 20.2363H18.5C19.6 20.2363 20.5 19.3363 20.5 18.2363V6.23633C20.5 5.13633 19.6 4.23633 18.5 4.23633ZM18.1 8.48633L11.03 12.9063C10.71 13.1063 10.29 13.1063 9.97 12.9063L2.9 8.48633C2.79973 8.43004 2.71192 8.35399 2.64189 8.26278C2.57186 8.17157 2.52106 8.06711 2.49258 7.9557C2.46409 7.84429 2.4585 7.72826 2.47616 7.61463C2.49381 7.50101 2.53434 7.39214 2.59528 7.29463C2.65623 7.19712 2.73632 7.11298 2.83073 7.04732C2.92513 6.98166 3.03187 6.93584 3.1445 6.91263C3.25712 6.88941 3.37328 6.88929 3.48595 6.91228C3.59863 6.93526 3.70546 6.98086 3.8 7.04633L10.5 11.2363L17.2 7.04633C17.2945 6.98086 17.4014 6.93526 17.514 6.91228C17.6267 6.88929 17.7429 6.88941 17.8555 6.91263C17.9681 6.93584 18.0749 6.98166 18.1693 7.04732C18.2637 7.11298 18.3438 7.19712 18.4047 7.29463C18.4657 7.39214 18.5062 7.50101 18.5238 7.61463C18.5415 7.72826 18.5359 7.84429 18.5074 7.9557C18.4789 8.06711 18.4281 8.17157 18.3581 8.26278C18.2881 8.35399 18.2003 8.43004 18.1 8.48633Z"
                                  fill="#ACACAC"
                              />
                          </g>
                          <defs>
                              <clipPath id="clip0_1556_10377">
                                  <rect
                                      width="24"
                                      height="24"
                                      fill="white"
                                      transform="translate(0.5 0.236328)"
                                  />
                              </clipPath>
                          </defs>
                      </svg>
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
                  <button>{t("signUp")}</button>
              </div>
          </div>
          <footer className="footer">
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
                              <li onClick={() => navigate("/services")}>
                              {t("services")}
                              </li>
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
