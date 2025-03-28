import React from "react";
import "./Home.css";
import Pass from "../assets/Passport_Size.jpg";
import pdf from "../assets/Prathamesh_Mulik.pdf";
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const Home = () => {
  return (
    <section id="hero">
      <div className="container">

        <div className="text-content">
          <h1 className="name">Prathamesh Mulik</h1>
          <p className="description">
            A passionate MERN Stack developer who loves building dynamic and efficient web applications, constantly exploring new technologies to enhance user experiences.
          </p>

          <div className="social-icons">
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


          <div className="buttons">
            <a href="https://github.com/Pra8123" className="btn github">⭐ Follow Me On Github</a>
            <a href={pdf} className="btn resume">📄 See My Resume</a>
          </div>
        </div>


        <div className="image-container">
          <img src={Pass} alt="Miftaul Mannan" className="hero-image" />
        </div>
      </div>


      <a href="#top" className="scroll-top">⬆</a>
    </section>
  );
};

export default Home;
