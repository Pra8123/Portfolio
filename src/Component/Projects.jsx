import React from "react";
import "./Projects.css";
import projectImg from "../assets/project.png";
import uiIcon from "../assets/uiIcon.png";
import serverIcon from "../assets/serverIcon.png";

const projects = [
  {
    name: "Gym Website",
    description: "Gym Website made with html, css and javascript.",
    techStack: ["Html", "CSS", "Javascript"],
    github: "https://github.com/Pra8123/Gym_website",
    liveDemo: "https://fitmaker-jade.vercel.app/",
    image: require("../assets/gym.png"),
  },
  {
    name: "VisionNest Webpage",
    description:
      "An webpage built with Reactjs, tailwind css.",
    techStack: ["Reactjs", "tailwind css"],
    github: "https://github.com/Pra8123/VisionNest_agency",
    liveDemo: "https://visionnestweb.netlify.app/",
    image: require("../assets/website.png"),
  },
  {
    name: "qr-based-child-protection",
    description:
      "A  QR-based child protection system that enables instant emergency contact and location sharing when a child is found..",
    techStack: ["Reactjs", "Tailwind CSS", "Node.js","Express.js","PostgreSQL","Twilio", ],
    github: "https://github.com/Pra8123/QR-bsed-child-protection",
    liveDemo: "",
    image: require("../assets/qr-based.png"),
  },
];

const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">My Projects</h1>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-wrap">
              <img src={project.image} alt={project.name} />
            </div>
            <div className="project-body">
              <h2 className="project-title">{project.name}</h2>
              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button github"
                >
                  GitHub Repo
                </a>
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button live-demo"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
