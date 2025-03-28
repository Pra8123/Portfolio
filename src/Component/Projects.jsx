import React from "react";
import "./Projects.css"; 

const projects = [
  {
    name: "Portfolio",
    description: "Portfolio made with ReactJS for GitHub pages.",
    techStack: ["Reactjs","Html","CSS"],
    github: "https://github.com/user/portfolio",
    liveDemo: "https://user.github.io/portfolio",
  },
  {
    name: "E-learning Management system",
    description: "An  e-learning platform built with Reactjs, Nodejs, Expressjs , MongoDB",
    techStack: ["Reactjs", "Nodejs","Expressjs","Mongodb"],
    github: "https://github.com/Pra8123/E-learning-website.git",
    liveDemo: "https://e-learning-website-frontend.onrender.com/",
  },
  {
    name: "Food delivery website",
    description: " Developed a responsive and user-friendly food delivery website using React.js and Bootstrap.",
    techStack: ["Reactjs", "Bootstrap"],
    github: "https://github.com/Pra8123/Food_delivery_react_Project.git",
    liveDemo: "https://feastexpressweb.netlify.app",
  }
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{project.name}</h2>
            <p>{project.description}</p>

            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>

            <div className="links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="button github">
                GitHub Repo
              </a>
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="button live-demo">
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
