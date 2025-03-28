

import React from "react";

import internImage from "../assets/intern.png"; 

const Intern = () => {
  return (
    <section className="intern-container" id="intern">
      <h2 className="intern-title">Internship Experience</h2>
      <div className="intern-card">
        <div className="intern-image">
          <img src={internImage} alt="Internship" />
        </div>

        <div className="intern-content">
          <div className="intern-header">
            <h3>Numetry Technologies</h3>
            <span>Jan 2024 - Jun 2024</span>
          </div>
          <h4>Front-end developer internship</h4>
          <p className="cgpa"> Duration: 6 Months</p>
          <ul className="intern-list">
            <li>Designed and implemented responsive web interfaces using HTML, CSS, and JavaScript, ensuring seamless user
            experiences across devices and browsers.</li>
            <li>Integrated third-party libraries to enhance website functionalities, decreasing development time by 15%</li>
            <li>Developed and maintained front-end features utilizing React.js, which improved site’s performance and scalabil
            ity.</li>
          </ul>
          <button className="visit-website">View Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Intern;

