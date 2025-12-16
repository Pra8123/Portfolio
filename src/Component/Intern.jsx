

import React from "react";
// import internImage from "../assets/intern.png";
import pdf from "../assets/Prathamesh_Mulik.pdf";

const internships = [
  {
    company: "Numetry Technologies",
    role: "Front-end Developer Intern",
    date: "Jan 2024 - Jun 2024",
    duration: "6 Months",
    points: [
      "Designed and implemented responsive web interfaces using HTML, CSS, and JavaScript across devices and browsers.",
      "Integrated third-party libraries to enhance functionalities, decreasing development time by 15%.",
      "Maintained React features that improved site performance and scalability.",
    ],
    // cta: { label: "View Resume", link: pdf },
  },
  {
    company: "Fullstack Guru Academy",
    role: "MERN Stack Certification",
    date: "Jul 2024 - Mar 2025",
    duration: "8 Months",
    points: [
      "Built multiple full-stack applications using React.js, Node.js, Express.js, and MongoDB.",
      "Gained hands-on experience in full-stack development, including REST API integration, user authentication, and state management.",
    ],
  },
  {
    company: "Sazinga digital services private limited",
    role: "Full Stack Developer Intern",
    date: "Apr 2025 - Nov 2025",
    duration: "7 Months",
    points: [
      "Worked on live projects including Aries Agro, Project Management System, and Goicar.",
      "Contributed to frontend development using Angular and mobile app development with React Native.",
      "Implemented backend services using Node.js with PostgreSQL as the database.",
      "Collaborated with the team to design and integrate features for project tracking, reporting, and task management."
    ],
  },
];

const Intern = () => {
  return (
    <section className="intern-container" id="intern">
      <h2 className="intern-title">Experience</h2>
      <div className="intern-timeline">
        {internships.map((item, index) => (
          <div
            key={item.company}
            className="intern-row"
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="intern-left">
              <div className="intern-company">{item.company}</div>
              <div className="intern-date">{item.date}</div>
            </div>

            <div className="intern-center">
              <span className="intern-dot">
                <span className="intern-inner" />
              </span>
              {index !== internships.length - 1 && <span className="intern-line" />}
            </div>

            <div className="intern-right">
              <div className="intern-header">
                <h4>{item.role}</h4>
                <span className="intern-duration">{item.duration}</span>
              </div>
              <div className="intern-points">
                <ul>
                  {item.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
              {item.cta && (
                <a
                  className="intern-cta"
                  href={item.cta.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.cta.label}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Intern;