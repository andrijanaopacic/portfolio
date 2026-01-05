import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import "../styles/projects.css"; 

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <span className="projects-badge">Experience</span>
        <h2>My Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((proj) => (
          <div key={proj.id} className="project-card">
            <div className="project-img-wrapper">
              <img src={proj.image} alt={proj.title} className="project-img" />
            </div>

            <div className="project-content">
              <div className="project-tech">
                {proj.techStack && proj.techStack.slice(0, 3).map((t, i) => (
                  <span key={i} className="tech-tag">{t}</span>
                ))}
              </div>

              <h3>{proj.title}</h3>
              <p>{proj.shortDescription}</p>

              <div className="project-buttons">
                {/* Detalji vode na dinamičku rutu /project/ID */}
                <Link to={`/project/${proj.id}`} className="project-btn btn-main">
                  Details
                </Link>
                
                {proj.github ? (
                  <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-btn btn-alt">
                    GitHub
                  </a>
                ) : proj.live ? (
                  <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-btn btn-alt">
                    Live Demo
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;