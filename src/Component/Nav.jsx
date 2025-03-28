import React, { useState } from "react";
import "./Nav.css";

const Nav = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      <div className="nav">
        <div className="logo">
          <a href="#home">Prathamesh </a>
        </div>
        <button className="hamburger" onClick={toggleNav}>
          &#9776;
        </button>
        <div className={`tex ${isNavVisible ? "show" : ""}`}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#intern">Experiance</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>

           
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
