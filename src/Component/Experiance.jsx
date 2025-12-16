
import React from "react";
import "./Experiance.css";

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

const internshipExperience = [
  {
    company: "Numetry Technologies",
    role: "Front-end Developer Intern",
    date: "Jan 2024 - Jun 2024",
    summary:
      "Delivered responsive React components, integrated third-party libraries, and improved performance for client projects.",
  },
  {
    company: "TechNova Labs",
    role: "UI Developer Intern",
    date: "Jun 2023 - Dec 2023",
    summary:
      "Built UI prototypes, polished design handoff, and enhanced accessibility for dashboards and marketing pages.",
  },
];

const education = [
  {
    school: "Svpm College of Engineering Malegaon, Baramati",
    date: "Jun 2020 - Jun 2024",
    degree: "B.E. Computer Science",
    description: "CGPA 8.6 | Built strong fundamentals in full-stack development and software engineering.",
    color: "#1c8c77",
  },
  {
    school: "N.G. Acharya & D.K. Marathe College, Mumbai",
    date: "Jun 2019 - May 2020",
    degree: "HSC",
    description: "Percentage: 68.46% | Focused on mathematics and computer science electives.",
    color: "#e66a57",
  },
  {
    school: "AFAC English School, Mumbai",
    date: "Mar 2016 - Jan 2018",
    degree: "SSC",
    description: "Percentage: 85.20% | Participated in coding clubs and science exhibitions.",
    color: "#e8b048",
  },
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

      {/* <section className="internship-container" id="experience">
        <h2 className="section-title">Internship Experience</h2>
        <div className="internship-list">
          {internshipExperience.map((item, index) => (
            <div
              key={`${item.company}-${item.role}`}
              className="internship-card"
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="internship-meta">
                <span className="internship-company">{item.company}</span>
                <span className="internship-date">{item.date}</span>
              </div>
              <h4 className="internship-role">{item.role}</h4>
              <p className="internship-summary">{item.summary}</p>
            </div>
          ))}
        </div>
      </section> */}

      <section className="education-container" id="education">
        <h2 className="section-title">Education</h2>
        <div className="timeline">
          {education.map((item, index) => (
            <div
              key={item.school}
              className="timeline-row"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="timeline-col timeline-left">
                <h3>{item.school}</h3>
                <span className="timeline-date">{item.date}</span>
              </div>

              <div className="timeline-center">
                <span className="timeline-dot" style={{ borderColor: item.color }}>
                  <span className="timeline-inner" style={{ background: item.color }} />
                </span>
                {index !== education.length - 1 && <span className="timeline-line" />}
              </div>

              <div className="timeline-col timeline-right">
                <h4>{item.degree}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
