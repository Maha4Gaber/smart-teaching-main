import React, { useState, useEffect } from "react";
import { Country, State } from "country-state-city";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ImSpinner10 } from "react-icons/im";
import rightLogo from "../../../assests/Register/right.png";
import RegisterFooter from "../RegisterFooter/RegisterFooter";
// Icons
import { FaUser } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { BiSolidShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";


import "./SingleStepForm.css";
import { useTranslation } from "react-i18next";


const SingleStepForm = () => {
  const baseURL = 'https://sts.pythonanywhere.com'  // or 'https://route-ecommerce-app.vercel.app'
  const {t, i18n} = useTranslation()
  const lang = i18n.language
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errReset, seterrReset] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [transitionClass, setTransitionClass] = useState("");

  const [errMsg, setُrrMsg] = useState(null)

  let navigate = useNavigate();

  async function handleRegister(values) {
    values.country_code=values.mobile.slice(0,4)
    values.role='instructor'
    delete values.state
    delete values['Your City']
    delete values['Your Country']
    delete values['jobTitle']
    

    setLoading(true)
    let {data} = await axios.post(`https://sts.pythonanywhere.com/api/v2/register/`, values).catch(err => {
    console.log (err)
    setLoading(false)
    setُrrMsg(`${err.response.data.errors.param}: ${err.response.data.errors.msg}`) 
  })
    if (data.message === 'success') {
        setLoading(false)
        navigate('/login')}
        
    
    setLoading(true);
    console.log(values);
    console.log(values.full_name);
    console.log(values.country);
    setLoading(false);
  }

  let validationSchema = Yup.object({
    full_name: Yup.string()
      .required("Name is Required")
      .min(3, "Name minlength is 3 chars")
      .max(20, "Name maxlength is 20 chars"),
    email: Yup.string()
      .required("Email is Required")
      .email("Invalid email address *exemple@yyy.zzz"),
    password: Yup.string().required("Password is required").matches(/^[A-Z][a-z0-9]{5,10}$/,
        "Password must start with Capital Letter includes at least 5 and less than 10 chars"
      ),
    password2: Yup.string()
      .required("Please reEnter Your Password")
      .oneOf([Yup.ref("password")], "Confirm password does not match"),
    mobile: Yup.string().required("Phone is required"),
    job_title: Yup.string().required("Job Title is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
  });

  let formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      password2: "",
      mobile: "",
      job_title: "",
      country: "",
      city: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  async function resetPass(value) {
    setLoading(true);
    console.log(value);
    console.log(`${value.resetCode1}${value.resetCode2}` )
    setLoading(false);
  }

  const isCodeComplete = () => {
      for (let index = 1; index <= 4; index++) {
        
          if (!formik1.values[`resetCode${index}`]) {
          return false;
          }
      }
    return true;
  };

  let validPass = Yup.object({
    resetCode1: Yup.string().required('Reset Code is Required').matches(/\d{1}/, 'Please Enter Valid code').max(1),
    resetCode2: Yup.string().required('Reset Code is Required').matches(/\d{1}/, 'Please Enter Valid code').max(1),
    resetCode3: Yup.string().required('Reset Code is Required').matches(/\d{1}/, 'Please Enter Valid code').max(1),
    resetCode4: Yup.string().required('Reset Code is Required').matches(/\d{1}/, 'Please Enter Valid code').max(1),
  })

  let formik1 = useFormik({
    initialValues: {
      resetCode1: "",
      resetCode2: "",
      resetCode3: "",
      resetCode4: "",
    },
    validationSchema: validPass,
    onSubmit: resetPass,
  });

  const handleVerificationSubmit = () => {
      
    setTimeout(() => {
      let close = document.querySelector('.btn-close')
        close.click()
        navigate('/login');
    }, 5000);
  };

  useEffect(() => {
    const countries = Country?.getAllCountries();
    formik.setFieldValue("Your Country...", ""); 
    formik.setFieldValue("Your City...", "");
    formik.setFieldValue("job_title", ""); 
  }, []);

  useEffect(() => {
    const states = State.getStatesOfCountry(formik.values.country);
    formik.setFieldValue("state", "");
  }, [formik.values.country]);


  // const handleNextStep = () => {
  //   setTransitionClass("slide-up");
  //   setTimeout(() => {
  //     setStep((prevStep) => prevStep + 1);
  //     setTransitionClass("");
  //   }, 500);
  // };

  // const handlePrevStep = () => {
  //   setTransitionClass("slide-down");
  //   setTimeout(() => {
  //     setStep((prevStep) => prevStep - 1);
  //     setTransitionClass("");
  //   }, 500);
  // };
  let isRTL = lang =='en'?'ltr':'rtl'
  const sectionStyles = {
      direction: isRTL  ,
    };

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={`multi-form ${step} ${transitionClass}`}>
        
          <div className= {`col-lg-8 col-md-10 mx-auto px-md-0 px-4 step step-1 ${isRTL}`}>
            {/* Name Input */}
            <div className="form-floating name-input mt-5 mb-4">
              <input
              style={sectionStyles}
                type="text"
                className={`form-control ${formik.values.full_name&& 'input-border-color'}`}
                id="floatingName"
                name="full_name"
                placeholder="full_name"
                required
                onBlur={formik.handleBlur}
                value={formik.values.full_name}
                onChange={formik.handleChange}
              />
              {/* Label */}
              <label
                className={` ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingName"
              >
              {t("name")}
              </label>

              <span className= {formik.values.full_name&& 'icon-active' } ><FaUser/></span>

              {formik.errors.full_name && formik.touched.full_name ? (
                <div className="alert alert-danger error my-0 py-2">
                  {formik.errors.full_name}
                </div>
              ) : null}
            </div>

            {/* Email Input */}
            <div className="form-floating mb-4 ">
              <input
              style={sectionStyles}
                type="email"
                className={`form-control ${formik.values.email&& 'input-border-color'}`}
                id="floatingEmail"
                name="email"
                placeholder="Email"
                required
                onBlur={formik.handleBlur}
                value={formik.values.email}
                onChange={formik.handleChange}
              />

              <label
                className={`${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingEmail"
              >
                {t("email")}
              </label>

              <span className= {formik.values.email&& 'icon-active'}><MdEmail/></span>

              {formik.errors.email && formik.touched.email ? (
                <div className="alert alert-danger error my-0 py-2">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>

            {/* Phone Input */}
            <div className="form-floating mb-4 mobile">
              <PhoneInput
                defaultCountry="SA"
                className={`form-control ${formik.values.mobile&& 'input-border-color'}`}
                id="floatingPhone"
                placeholder={`${t("phone")}`}
                name="mobile"
                onBlur={(e) => {
                  const clonedEvent = e ? Object.assign({}, e) : null; // Create a copy of the event if it's not null
                  formik.handleBlur(clonedEvent);
                }}
                value={formik.values.mobile}
                onChange={(value, data, event) => {
                  if (event) {
                    const clonedEvent = Object.assign({}, event); // Create a copy of the event
                    formik.handleChange(clonedEvent); // You can handle the event here
                  }
                  formik.setFieldValue("mobile", value);
                }}
                required
              />
              {/* Label */}
              {/* <label
                className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingPhone"
              >
                {langs[lang].ContactForm.p{t("name")}
              </label> */}

              <span className= {formik.values.mobile&& 'icon-active'}><MdPhone/></span>

              {formik.errors.mobile && formik.touched.mobile ? (
                <div className="alert alert-danger error my-0 py-2">
                  {formik.errors.mobile}
                </div>
              ) : null}
            </div>

            {/* Password Input */}
            <div className="form-floating mb-4">
              <input
              style={sectionStyles}
                type={showPassword ? 'text' : 'password'}
                className={`form-control ${formik.values.password&& 'input-border-color'}`}
                id="floatingPassword"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />

              <label
                className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingPassword"
              >
                {t("password")}
              </label>

              <span className= {`cursor-pointer ${formik.values.password&& 'icon-active'}`} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <BiSolidShow /> : <BiHide />}
              </span>

              {formik.errors.password && formik.touched.password ? (
                <div className="alert alert-danger error my-0 py-2">
                  {formik.errors.password}
                </div>
              ) : null}
            </div>

            {/* password2 Input */}
            <div className="form-floating mb-4 ">
              <input
              style={sectionStyles}
                type={showPassword ? 'text' : 'password'}
                className={`form-control ${formik.values.password2&& 'input-border-color'}`}
                id="floatingpassword2"
                name="password2"
                placeholder={t("repassowrd")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password2}
              />

              <label
                className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingpassword2"
              >
                {t("repassowrd")}
              </label>

              <span  className= {`cursor-pointer ${formik.values.password2&& 'icon-active'}`} onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <BiSolidShow /> : <BiHide />}
              </span>

              {formik.errors.password2 && formik.touched.password2 ? (
                <div className="alert alert-danger error my-0 py-2">
                  {formik.errors.password2}
                </div>
              ) : null}
            </div>

            {/* Job Title */}
            <div className="input-group mb-4">
              <select
                className={`form-select form-control ${formik.values.job_title&& 'input-border-color'}`}
                id="inputGroupSelect01"
                name="job_title"
                value={formik.values.job_title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="" disabled>
                  {t("job")}
                </option>
                <option value="teacher">Teacher</option>
                <option value="doctor">University Doctor</option>
                <option value="another">Another</option>
              </select>

              {formik.errors.job_title && formik.touched.job_title ? (
                <div className="alert alert-danger error my-0 py-2">
                  {formik.errors.job_title}
                </div>
              ) : null}
            </div>

            {/* Country and city Inputs */}
            <div className="mb-4 d-flex justify-content-between">
              <div className="w-50">
                <select
                  className={`form-select form-control ${formik.values.country&& 'input-border-color'}`}
                  id="country"
                  placeholder="Your Country..."
                  name="country"
                  value={formik.values.country}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                  {t("country")}                     
                  </option>

                  {Country.getAllCountries().map((country) => (
                    <option key={country.isoCode} value={country.isoCode}>
                      {country.name}
                    </option>
                  ))}
                </select>
                {formik.errors.country && formik.touched.country && (
                  <div className="alert alert-danger error my-0 py-2 w-75">
                    {formik.errors.country}
                  </div>
                )}
              </div>

              <div className="mx-2"></div>

              <div className="w-50">
                <select
                  className={`form-select form-control ${formik.values.city&& 'input-border-color'}`}
                  id="city"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    {t("city")}
                    
                  </option>

                  {State.getStatesOfCountry(formik.values.country).map(
                    (state) => (
                      <option key={state.isoCode} value={state.name}>
                        {state.name}
                      </option>
                    )
                  )}
                </select>

                {formik.errors.city && formik.touched.city && (
                  <div className="alert alert-danger error my-0 py-2 w-75">
                    {formik.errors.city}
                  </div>
                )}
              </div>
            </div>

            <div className="d-flex confirm  justify-content-between align-items-center mb-4">

              <div className='d-flex  justify-content-start'>
                <input
                style={sectionStyles} className='checkbox mt-1' type="checkbox" name='remember' value= 'value' id='remember' />
                <label className='mx-2' htmlFor="remember">{t('privacyPolicy')}</label>
              </div>

              {/* <ConfirmRegister formik={formik} loading={loading} name={formik.values.full_name}/> */}
              {loading ? (
                <button className="modal-btn" type="button">
                  {" "}
                  <ImSpinner10 className="spinner-rotate" />{" "}
                </button>
              ) : (
                <button
                  className="modal-btn"
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty)}
                  data-bs-target="#exampleModalToggle"
                  data-bs-toggle="modal"
                >
                {t("signUp")}
                </button>
              )}
            </div>

          </div>
        

        
      </form>

      {/* Confirm Modal */}
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          {/* Modal Content */}
          <div className="modal-content p-5">
            <div className="modal-header text-center p-0">
              <h1 className="modal-title" id="exampleModalToggleLabel">
                Hello, {formik.values.full_name} <br />
                Your account has been created successfully
              </h1>
              <img className="right-img my-4" src={rightLogo} alt="" />
            </div>

            <div class="modal-footer p-0 text-center d-block">
              <form className="m-0" onSubmit={(e) => e.preventDefault()}>
                <button
                  type="submit"
                  className="btn modal-btn"
                  data-bs-target="#exampleModalToggle2"
                  data-bs-toggle="modal"
                >
                  Confirm
                </button>
              </form>
              {/* <ConfirmCode/> */}
            </div>
          </div>
        </div>
      </div>

      {/* ReSend Code */}
      <div
        className="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content code-modal">
            <div className="modal-header p-0">
              <h1 className="modal-title" id="exampleModalToggleLabel2">
                A confirmation code has been sent to <br /> your email , Please
                enter the <br /> confirmation code
              </h1>
            </div>

            <form onSubmit={formik1.handleSubmit}>
              <div className="form-floating d-flex justify-content-between">
                {[1, 2, 3, 4].map((index) => (
                  <input
                  style={sectionStyles}
                    key={index}
                    type="number"
                    // pattern="\d*"
                    className="form-control code-input"
                    id={`floatingCode${index}`}
                    name={`resetCode${index}`}
                    onChange={(e) => {
                      formik1.handleChange(e);
                      
                      if (e.target.value && index < 4) {
                        document.getElementById(`floatingCode${index + 1}`).focus();
                      };
                    }}
                    onBlur={formik1.handleBlur}
                    value={formik1.values[`resetCode${index}`]}
                  />
                ))}
              </div>

              <div className="resend-code text-center">
                Resend Confirmation Code{" "}
                <span className="mx-2 resend-time">60:00</span>
              </div>

              {errReset && (
                <div className="alert alert-danger error my-2 py-2">
                  {errReset}
                </div>
              )}

              <div class="modal-footer p-0">
                <button
                  type="submit"
                  className="btn m-0"
                  onClick={() => {
                      formik1.handleSubmit();
                      handleVerificationSubmit();
                  }}
                  disabled={!(formik1.isValid && formik1.dirty && isCodeComplete())}
                  data-bs-target="#exampleModalToggle3"
                  data-bs-toggle="modal"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Done Modal */}
      <div
        className="done modal fade"
        id="exampleModalToggle3"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel3"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          {/* Modal Content */}
          <div className="modal-content p-5">
            <div className="modal-header text-center p-0">
              
              <button type="button" className="btn-close d-none" data-bs-dismiss="modal" aria-label="Close"></button>

              <h1 className="modal-title mb-0" id="exampleModalToggleLabel3">
                Email has been confirmed successfully
              </h1>
              <img className="right-img mt-4" src={rightLogo} alt="" />
            </div>
          </div>
        </div>


      </div>

      <RegisterFooter />
    </div>
  );
};

export default SingleStepForm;
