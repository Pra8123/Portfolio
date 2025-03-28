
import React from "react";
// import "./Experience.css";

const skills = [
    { title: "c++", imageSrc: require("../assets/cpp.png") },
    { title: "HTML", imageSrc: require("../assets/html.png") },
    { title: "CSS", imageSrc: require("../assets/css.png") },
    { title: "Javascript", imageSrc: require("../assets/js.png") },
    { title: "React", imageSrc: require("../assets/react.png") },
    { title: "Node", imageSrc: require("../assets/node.png") },

    { title: "MongoDB", imageSrc: require("../assets/mongodb.png") },
    { title: "angular", imageSrc: require("../assets/angular.png") },
    { title: "sql", imageSrc: require("../assets/sql.png") },
  
    { title: "tailwind css", imageSrc: require("../assets/tcss.png") },
];

const Experience = () => {
    return (
        <div className="experience-education-container" id="Skills">
        
            <section className="experience-container">
                <h2 className="section-title">Skills</h2>
                <div className="skills">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill">
                            <div className="skill-image-container">
                                <img src={skill.imageSrc} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </section>

      
            <section className="education-container">
                <h2 className="section-title">Education</h2>
                <div className="education-card">
                    <div className="education-header">
                        <h3>Svpm College of Engineering Malegaon, Baramati </h3>
                        <span> Jun 2020 - Jun 2024</span>
                    </div>
                    <h4>Bachelor of Engineering(B.E) Computer Science</h4>
                    <p className="cgpa">CGPA : 8.6</p>
              
                </div>
                <div className="education-card">
                    <div className="education-header">
                        <h3>N.G. Acharya and D.K. Marathe College of Arts, Science and Commerce ,Mumbai  </h3>
                        <span>Jun 2019 - May 2020</span>
                    </div>
                    <h4>HSC</h4>
                    <p className="cgpa">Percentage: 68.46%  </p>
                 
                </div>
                <div className="education-card">
                    <div className="education-header">
                        <h3>AFAC English School, Mumbai </h3>
                        <span>March 2016 - January 2021</span>
                    </div>
                    <h4>SSC</h4>
                    <p className="cgpa">Percentage: 85.20%  </p>
                
                </div>
            </section>
        </div>
    );
};

export default Experience;
