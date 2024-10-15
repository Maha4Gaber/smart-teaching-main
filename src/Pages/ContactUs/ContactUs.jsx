import React from "react";
import contactImg from "../../assests/ContactUS/image.png";
import ImageComp from "../../Components/ImageComp/ImageComp";
import ContactForm from "../../Components/ContactForm/ContactForm";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contactus">
      <div className="d-flex justify-content-center">
        <h1>Contact US</h1>
      </div>

      <div className="container-lg px-3 px-sm-5 px-lg-0">
        <div className="row">
          {/* Register Image */}
          {/* <div className="col-lg-6 col-shadow p-0  register-img">
            <ImageComp src={contactImg} alt="Register Now" />
          </div> */}

          {/* Contact Form */}
          <div className="col-lg-6 p-0 pt-5 pt-lg-0 position-relative bg-white register-forms m-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
