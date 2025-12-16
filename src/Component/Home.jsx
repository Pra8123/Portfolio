import React from "react";
import "./Home.css";
import Pass from "../assets/Passport_Size.jpg";
import pdf from "../assets/Prathamesh_Mulik.pdf";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const Home = () => {
  return (
    <section id="home">
      <div className="hero-container">
        <div className="text-content">
          <p className="eyebrow">MERN Stack Developer</p>
          <h1 className="name">Prathamesh Mulik</h1>
          <p className="description">
            Passionate about building dynamic and efficient web applications,
            constantly exploring new technologies to craft delightful user
            experiences.
          </p>

          <div className="social-icons">
            <ul className="social-icons">
              {/* <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li> */}
              <li>
                <a
                  href="https://www.linkedin.com/in/prathamesh-mulik-926b70226/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a  href="https://wa.me/919136771615" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Pra8123"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>

          <div className="buttons">
            <a href="https://github.com/Pra8123" className="btn github">
              ⭐ Follow Me On Github
            </a>
            <a href={pdf} className="btn resume">
              📄 See My Resume
            </a>
          </div>
        </div>

        <div className="image-container">
          <div className="hero-image-wrapper">
            <img src={Pass} alt="Prathamesh Mulik" className="hero-image" />
            {/* <span className="ring ring-1" /> */}
            <span className="ring ring-2" />
          </div>
        </div>
      </div>

      <a href="#top" className="scroll-top">
        ⬆
      </a>
    </section>
  );
};

export default Home;
