import React, { useState } from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import './BlogContact.css'
import { useTranslation } from 'react-i18next';
import axios from 'axios';

const BlogContact = () => {
    const {t, i18n} = useTranslation()
    const lang = i18n.language

    const [loading, setLoading] = useState(false)
    const [submissionStatus, setSubmissionStatus] = useState(false);

    async function handleContact(values) {
        setLoading(true)
        // console.log(values)
        values.mail=values.email
        delete(values.email)
        console.log(values)
        try {
            let { data } = await axios.post("api/v3/get-in-touch", values);
        
            if (data) {
            console.log(data);
            }
        } catch (err) {
            // seterrMsg(err.response.data[0]);
            console.log(err.response.data.message);
        }
        setLoading(false)
    }

    let validationSchema = Yup.object({
        name: Yup.string().required("Name is Required").min(3, "Name minlength is 3 chars").max(20, "Name maxlength is 20 chars"),
        email: Yup.string().required("Email is Required").email("Invalid email address"),
        message: Yup.string().required('Please Enter Your Message').min(20, 'Minlength of Message chars 20 chars').max(200, 'Maxlength of Message chars 200 chars')
    });

    let formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema,
        onSubmit: handleContact,
        });

return (
    <div className='blog-box blog-contact overflow-x-hidden'>

        <h3>Get in Touch</h3>

        <form onSubmit={formik.handleSubmit}>
            
            {/* Name Input */}
            <div className="form-floating mb-4 ">

                <input
                type="text"
                className={`form-control ${formik.values.name&& 'input-border-color'}`}
                id="floatingName"
                name="name"
                placeholder='name'
                onBlur={formik.handleBlur}
                value={formik.values.name}
                onChange={formik.handleChange}
                required
                />

                {/* Label */}
                <label
                className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingName"
                >
                    Name
                </label>

                {formik.errors.name && formik.touched.name ? (
                    <div className="alert alert-danger error my-0 py-2">
                        {formik.errors.name}
                    </div>
                ) : null}

            </div>

            {/* Email Imput */}
            <div className="form-floating mb-4 ">

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
                />

                {/* Label */}
                <label
                className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingEmail"
                >
                    Email
                </label>

                {formik.errors.email && formik.touched.email ? (
                    <div className="alert alert-danger error my-0 py-2">
                        {formik.errors.email}
                    </div>
                ) : null}

            </div>

            <div className="form-floating mb-4">
                <textarea
                className={`form-control ${formik.values.message&& 'input-border-color'}`}
                placeholder="Message"
                id="floatingTextarea"
                name="message"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.message}
                cols={40}
                >

                </textarea>
                
                <label
                className={`mx-2 ${lang === "ar" ? " end-0" : "start-0"}`}
                htmlFor="floatingTextarea"
                >
                    Message
                </label>

                {formik.errors.message && formik.touched.message ? (
                    <div className="alert alert-danger error my-0 py-2">
                        {formik.errors.message}
                    </div>
                ) : null}
            </div>


            <div className="text-center">
                    <button 
                    type="submit"
                    className="modal-btn" 
                    // onClick={()=>handleContact}
                    onClick={() => {
            // formik.handleContact();
            }}
                    disabled={!(formik.isValid && formik.dirty)}
                    >
                        send
                    </button>
                </div>




        </form>
    </div>
)
}

export default BlogContact