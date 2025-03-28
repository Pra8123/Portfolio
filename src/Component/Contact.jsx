import React, { useEffect } from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css"; 

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="containers">
        <div className="row">
  
          <div className="contact-info" data-aos="fade-up">
           
            <h1 className="title">Contact Me</h1>
            <div className="divider"></div>

            <h2>Email</h2>
            <p>
              <a href="prathameshmulik069@gmail.com">prathameshmulik069@gmail.com</a>
            </p>

            <h2>Social Network</h2>
            <ul className="social-icons">
              <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/prathamesh-mulik-926b70226/" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://" target="_blank" rel="noopener noreferrer">
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
            <form className="contact-form">
              <input type="hidden" name="access_key" value="dcf8c873-ee8a-4900-9c48-6b2e9598507f" />
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your E-mail" required />
              <input type="text" name="phone" placeholder="Phone Number" />
              <textarea name="message" placeholder="Your Message" required></textarea>
              <button type="submit" className="submit-btn">SEND</button>
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
