import React, { useEffect } from "react";
import "./About.css"; 
import aboutImage from "../assets/intern.png"; 
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section className="about-section" id="about">
            <div className="container" data-aos="fade-up">
                <div className="about-content">
              
                    <div className="about-text">
                      
                        <h1 className="title">Know About Me</h1>
                        <p>
                            Hi, I'm <strong>Prathamesh Mulik</strong>, a Computer Engineer and passionate Full Stack Developer committed to
                            creating exceptional web experiences. My journey in computer engineering has ignited a deep drive to innovate,
                            learn, and make meaningful contributions to the tech industry.
                        </p>
                        <p>
                            I strive to excel as a Full Stack Developer by continuously honing my skills, embracing challenges, and sharing
                            my knowledge with the tech community. Collaboration, honest learning, and a dedication to excellence guide my
                            professional journey as I work toward crafting impactful digital solutions.
                        </p>

                     
                        <div className="personal-info">
                            <div>
                                <h3>Date Of Birth</h3>
                                <p>8 Jan 2003</p>
                            </div>
                            <div>
                                <h3>Age</h3>
                                <p>22 Years</p>
                            </div>
                            <div>
                                <h3>Degree</h3>
                                <p>B.E (Computer Engineering)</p>
                            </div>
                            <div>
                                <h3>City</h3>
                                <p>Pune, Maharashtra.</p>
                            </div>
                        </div>
                    </div>

             
                    <div className="about-image" data-aos="fade-up">
                        <img src={aboutImage} alt="About Me" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
