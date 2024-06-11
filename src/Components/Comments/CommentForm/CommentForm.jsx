import React, { useState } from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import { GrStatusGood } from "react-icons/gr";
import './commentForm.css'
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const CommentForm = ({id,onDataChange,data}) => {
  const { t, i18n } = useTranslation();
    const lang = "en"
    const [loading, setLoading] = useState(false)
    const [submissionStatus, setSubmissionStatus] = useState(false);

    const newData=data;
    const handleButtonClick = () => {
        onDataChange('update'); // Call the callback function with the new data
        };
    async function addComment(values) {
        values.blog=id
        // values.preventDefault();
        setLoading(true)

        try {
            let { data } = await axios.post("api/v3/comments/", values);
        
            if (data) {
            // console.log(data);
        }
    } catch (err) {
        // seterrMsg(err.response.data[0]);
        console.log(err);
    }
    handleButtonClick()
        // console.log(values)
        
        setLoading(false)
    }


    let validationSchema = Yup.object({
        // name: Yup.string().required("Name is Required").min(3, "Name minlength is 3 chars").max(20, "Name maxlength is 20 chars"),
        // email: Yup.string().required("Email is Required").email("Invalid email address *exemple@yyy.zzz"),
        // phone: Yup.string().required("Phone is required"),
        comment: Yup.string().required('Please Enter Your Comment')
    });

    let formik = useFormik({
        initialValues: {
            // name: '',
            // email: '',
            // phone: '',
            comment: '',
        },
        validationSchema,
        onSubmit: addComment,
        });

return (
    <div className='comment-form'>
        <h3>{t('commentr')} </h3>

        <form onSubmit={formik.handleSubmit} className="row p-0" >
                {/* Name Input */}
                {/* <div className="form-floating mb-4 col-md-6 px-md-1 px-0"> */}

                    {/* <input
                    type="text"
                    className={`form-control ${formik.values.name&& 'input-border-color'}`}
                    id="floatingName"
                    name="name"
                    placeholder='name'
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    required
                    /> */}

                    {/* Label */}
                    {/* <label
                    className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                    htmlFor="floatingName"
                    >
                        {1}
                    </label> */}

                    {/* {formik.errors.name && formik.touched.name ? (
                        <div className="alert alert-danger error my-0 py-2">
                            {formik.errors.name}
                        </div>
                    ) : null} */}

                {/* </div> */}

                {/* Email Imput */}
                {/* <div className="form-floating mb-4 col-md-6 px-md-1 px-0">

                    <input
                    type="Email"
                    className={`form-control ${formik.values.email&& 'input-border-color'}`}
                    id="floatingEmail"
                    name="email"
                    placeholder='Email'
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    required
                    /> */}
                    
                    {/* Label */}
                    {/* <label
                    className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                    htmlFor="floatingEmail"
                    >
                        {2}
                    </label>

                    {formik.errors.email && formik.touched.email ? (
                        <div className="alert alert-danger error my-0 py-2">
                            {formik.errors.email}
                        </div>
                    ) : null}

                </div> */}

                {/* Phone Input  */}
                {/* <div className="form-floating mb-4 col-md-6 px-md-1 px-0">

                    <input
                    type="tel"
                    className={`form-control ${formik.values.phone&& 'input-border-color'}`}
                    id="floatingPhone"
                    name="phone"
                    placeholder='Phone'
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    required
                    /> */}
                    
                    {/* Label */}
                    {/* <label
                    className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                    htmlFor="floatingPhone"
                    >
                        {3}
                    </label>

                    {formik.errors.phone && formik.touched.phone ? (
                        <div className="alert alert-danger error my-0 py-2">
                            {formik.errors.phone}
                        </div>
                    ) : null}

                </div> */}

                {/* Comment Input */}
                <div className="form-floating mb-4 col-12 px-0 px-md-1">
                    <textarea
                    className={`form-control ${formik.values.comment&& 'input-border-color'}`}
                    placeholder="Leave your commment here"
                    id="floatingTextarea"
                    name="comment"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.comment}
                    cols={40}
                    ></textarea>

                    <label
                    className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                    htmlFor="floatingTextarea"
                    >
                        {t('commentr')}
                    </label>

                    {formik.errors.comment && formik.touched.comment ? (
                        <div className="alert alert-danger error my-0 py-2">
                            {formik.errors.comment}
                        </div>
                    ) : null}
                </div>


                {/* Save My Data (check Box) */}
                {/* <div className="col-12 mt-3 mb-4 d-flex align-items-center justify-content-center">
                    <input className='checkbox' type="checkbox" name='remember' value= 'value' id='remember' />
                    <label className='mx-1 checkLabel' htmlFor="remember"> Save my name, email, and website in this browser for the next time I comment.</label>
                </div> */}


                {/* Post Comment Button */}
                <div className="col-12 px-0 px-sm-1 text-center">
                    <button 
                    type="submit"
                    className="custom-btn z-1" 
                    disabled={!(formik.isValid && formik.dirty)}
                    onClick={() => {
            // formik.handleSubmit();
            }}
                    >
                        {t('send')}
                    </button>
                </div>

                {/* Success Msg */}
                <div
                    className={`success-msg w-auto ${submissionStatus ? "" : "hidden"}`}
                >
                {submissionStatus && (
                    <div className="alert alert-success w-auto fade-message">
                        {6} <GrStatusGood />
                    </div>
                )}

                </div>
        </form>

    </div>
)
}

export default CommentForm