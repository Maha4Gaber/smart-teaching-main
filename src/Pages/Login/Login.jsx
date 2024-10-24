import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Yup from "yup";
import { useFormik } from "formik";
import ImageComp from "../../Components/ImageComp/ImageComp";
import logo from "../../assests/Login/Logo.png";
import rightLogo from "../../assests/Register/right.png";
import { ImSpinner10 } from "react-icons/im";
import ForgetPassword from "../../Components/ForgetPassword/ForgetPassword";

// Icons:
import { MdEmail } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import "./Login.css";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Newuser } from "../../Slices/User/User";

const Login = ({}) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [loading, setLoading] = useState(false);
  const [errMsg, seterrMsg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  let navigate = useNavigate();
  const user_data = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  async function handleLogin(values) {
    // setLoading(true);
    // try {
    dispatch(Newuser(values));
    setTimeout(() => {
      // console.log(user_data);

      if (user_data.error !== null) {
        seterrMsg(user_data.error["non_field_errors"][0]);
        // console.log(err);
        // setLoading(false);
        // console.log(user_data);
        //   // localStorage.token = user_data.tokens.access;
        //   // localStorage.user_data = JSON.stringify(user_data);
      } else {
        // let model = document.getElementById("model2");
        // model.click();
        // handleVerificationSubmit();
        // setTimeout(() => {
        //   if (user_data.role == "user") {
        //     navigate("/StudentsRatingtheirTeachers");
        //   } else navigate("/");
        // }, 1900);
      }
    }, 1000);
    // let { data } = await axios.post("api/v2/login/", values);
    // } catch (err) {
  }

  // setLoading(false);

  let validationSchema = Yup.object({
    email_or_phone: Yup.string()
      .required("Email is Required")
      .email("Invalid email address *exemple@yyy.zzz"),
    password: Yup.string()
      .required("Password is required")
      // .matches(
      // /^[A-Z]$/,
      // "Password must start with Capital Letter includes at least 5 and less than 10 chars"
      // )
      .matches(
        /^[A-Z][A-Za-z\d@#$%^&*]{4,9}$/,
        `
    "Password must start with Capital Letter includes at least 5 and less than 10 chars`
      ),
  });

  let formik = useFormik({
    initialValues: {
      email_or_phone: "",
      password: "",
    },
    validationSchema,
    onSubmit: handleLogin,
  });

  const handleVerificationSubmit = () => {
    setTimeout(() => {
      let model = document.getElementById("close2");
      // console.log(model);
      model.click();
      // let close = document.getElementById("close");
      // close.click();
      // navigate('/');
    }, 1800);
  };
  let isRTL = lang == "en" ? "ltr" : "rtl";
  return (
    <div>
      <section className="login-sec multi-form">
        <form
          onSubmit={formik.handleSubmit}
          className={`bg-white form-padding login-form ${isRTL}`}
        >
          <div className="login-img text-center">
            <img src={logo} />
            {/* <ImageComp src={logo} /> */}
          </div>

          {errMsg ? <div className="alert alert-danger">{errMsg}</div> : null}

          <div className="form-floating my-4">
            <input
              type="email"
              className={`form-control ${
                formik.values.email_or_phone && "input-border-color"
              }`}
              id="floatingEmail"
              name="email_or_phone"
              placeholder="email_or_phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email_or_phone}
            />
            <label
              className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
              htmlFor="floatingEmail"
            >
              {t("email")}
            </label>

            <span className={formik.values.email_or_phone && "icon-active"}>
              <MdEmail />
              <i className="fa-regular fa-envelope-open"></i>
            </span>
            {formik.errors.email_or_phone && formik.touched.email_or_phone ? (
              <div className="alert alert-danger error my-0 py-2">
                {formik.errors.email_or_phone}
              </div>
            ) : null}
          </div>

          <div className="form-floating my-4">
            <input
              type={showPassword ? "text" : "password"}
              className={`form-control ${
                formik.values.password && "input-border-color"
              }`}
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

            <span
              className={`cursor-pointer ${
                formik.values.password && "icon-active"
              }`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <BiSolidShow /> : <BiHide />}
            </span>

            {formik.errors.password && formik.touched.password ? (
              <div className="alert alert-danger error my-0 py-2">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <div className=" d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center">
              <input
                className="checkbox radio"
                type="checkbox"
                name="remember"
                value="value"
                id="remember"
              />
              <label className="mx-1" htmlFor="remember">
                {t("RememberMe")}
              </label>
            </div>

            {/* <ForgetPassword /> */}
          </div>

          {loading ? (
            <button className="btn bg-main text-white mt-1" type="button">
              {" "}
              <ImSpinner10 className="spinner-rotate" />{" "}
            </button>
          ) : (
            <button
              type="submit"
              className="btn bg-main text-white mt-1"
              disabled={!(formik.isValid && formik.dirty)}
              onClick={() => {
                formik.handleSubmit();
                handleVerificationSubmit();
              }}
              // data-bs-target="#exampleModalToggle4"
              // data-bs-toggle="modal"
            >
              {t("login")}
            </button>
          )}

          <div className="mt-3 text-center">
            {t("Don't have an account?")}{" "}
            <Link to="/register" className="sign-color">
              {t("signUp")}
            </Link>{" "}
          </div>
        </form>
      </section>
      <button
        className="d-none "
        id="model2"
        data-bs-target="#exampleModalToggle4"
        // data-bs-target="#exampleModalToggle4"
        // data-bs-toggle="modal"
        data-bs-toggle="modal"
      ></button>
      <div
        className="done modal fade"
        id="exampleModalToggle4"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel4"
        tabIndex="-1"
      >
        <div className="modal-dialog modal-dialog-centered">
          {/* Modal Content */}
          <div className="modal-content w-75 p-5">
            <div className="modal-header text-center p-0">
              <button
                type="button"
                className="btn-close close-login d-none"
                data-bs-dismiss="modal"
                id="close2"
                aria-label="Close"
              ></button>

              <h1 className="modal-title mb-0" id="exampleModalToggleLabel4">
                {t("welcomback")}
              </h1>

              <img className="right-img mt-4" src={rightLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
