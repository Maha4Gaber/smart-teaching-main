import React, { useState } from "react";
import reImg from "../../assests/Register/hero image.png";
import ImageComp from "../../Components/ImageComp/ImageComp";
import SingleStepForm from "../../Components/RegisterComponents/SinleStepForm/SingleStepForm";
import FounderStepForm from '../../Components/RegisterComponents/FounderStepForm/FounderStepForm';
import { useTranslation } from 'react-i18next'
import "./Register.css";

const Register = () => {
const {t,i18n} = useTranslation()
const lang = i18n.language;
const [singleForm, setSingleForm] = useState(true);
const [multiForm, setMultiForm] = useState(false);
let isRTL = lang =='en'?'ltr':'rtl'
const sectionStyles = {
    direction: isRTL  ,
};

return (
    <section className="register" >
        <div className="container px-3 px-sm-5 px-lg-0">
            <div className="row">
                {/* Register Image */}
                {/* <div className="col-lg-6 p-0 col-shadow  register-img">
                    <ImageComp src={reImg} alt="Register Now" />
                </div> */}

                {/* Slider Form */}
                <div className="col-lg-2 "></div>
                <div className="col-lg-8 p-0 pt-5 pt-lg-0 position-relative bg-white register-forms">
                    {/* <div className= {`${isRTL} select-form`} >
                        <button
                            onClick={(e) => {
                                setSingleForm(true);
                                setMultiForm(false);
                            }}
                            className={`show-form1 ${
                                singleForm ? "" : "active"
                            }`}
                        >
                            {t("signUp")}
                        </button>

                        <button
                            onClick={(e) => {
                                setSingleForm(false);
                                setMultiForm(true);
                            }}
                            className={`show-form2 ${
                                multiForm ? "" : "active"
                            }`}
                        >
                        {t("signUpfounder")}
                            
                        </button>
                    </div> */}

                    {singleForm && <SingleStepForm />}

                    {multiForm && <FounderStepForm />}
                </div>
                <div className="col-lg-2 "></div>
            </div>
        </div>
    </section>
);
};

export default Register;
