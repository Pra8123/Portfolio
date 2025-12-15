import React, { useState } from "react";
import "./Nav.css";
import logoImg from "../assets/front-end-development.gif";

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeNav = () => setIsNavVisible(false);

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <a href="#home">
            <img src={logoImg} alt="Prathamesh logo" className="logo-image" />
            <span className="logo-text">Prathamesh</span>
          </a>
        </div>
        <button
          className="hamburger"
          aria-label={isNavVisible ? "Close menu" : "Open menu"}
          onClick={toggleNav}
        >
          {isNavVisible ? "✕" : "☰"}
        </button>
        <div className={`tex ${isNavVisible ? "show" : ""}`}>
          <ul>
            <li><a href="#home" onClick={closeNav}>Home</a></li>
            <li><a href="#about" onClick={closeNav}>About</a></li>
            <li><a href="#Skills" onClick={closeNav}>Skills</a></li>
            <li><a href="#intern" onClick={closeNav}>Experiance</a></li>
            <li><a href="#projects" onClick={closeNav}>Projects</a></li>
            <li><a href="#contact" onClick={closeNav}>Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
