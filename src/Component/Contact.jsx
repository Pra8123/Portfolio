import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css"; 

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "service_qzltnxf";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "template_2gnwb6k";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "9WnvEFk-4XYKnGJqL";

    emailjs
      .sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setStatus("success");
        event.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS submission failed", error);
        setErrorMessage("Something went wrong. Please try again later.");
        setStatus("error");
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="containers">
        <div className="row">
  
          <div className="contact-info" data-aos="fade-up">
           
            <h1 className="title">Contact Me</h1>
            <div className="divider"></div>

            <h2>Email</h2>
            <p>
              <a href="mailto:prathameshmulik069@gmail.com">prathameshmulik069@gmail.com</a>
            </p>

            <h2>Social Network</h2>
            <ul className="social-icons">
              {/* <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                </a>
              </li> */}
              <li>
                <a href="https://www.linkedin.com/in/prathamesh-mulik-926b70226/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://wa.me/919136771615" target="_blank" rel="noopener noreferrer">
               <FaWhatsapp />
                </a>
              </li>
              <li>
                <a href="https://github.com/Pra8123" target="_blank" rel="noopener noreferrer">
                <FaGithub />
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-form-container" data-aos="fade-up">
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your E-mail" required />
              <input type="text" name="phone" placeholder="Phone Number" />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit" className="submit-btn" disabled={status === "loading"}>
                {status === "loading" ? "SENDING..." : "SEND"}
              </button>
              {status === "success" && (
                <p className="form-status success">Thanks! Your message has been sent.</p>
              )}
              {status === "error" && (
                <p className="form-status error">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </div>


      <div className="footer">
        <p>---- Prathamesh Mulik ----</p>
      </div>
    </section>
  );
};

export default Contact;
