import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Github, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Contact from "./Contact";
import "../styles/projectDetail.css";

const ProjectLayout = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!project) return <div className="error-msg">Project not found</div>;

  return (
    <div className="project-detail-page">
      {/* HERO */}
      <section className="project-hero">
        <div className="container">
          <Link to="/" className="back-btn"><ArrowLeft size={18} /> Back to Portfolio</Link>
          <span className="category-tag">{project.category}</span>
          <h1>{project.title}</h1>
          <div className="mini-tech-list">
            {project.techStack.map(t => <span key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="detail-section">
          <div className="container">
            <div className="overview-content">
              <h3 className="section-title">Project Overview</h3>
              <p className="main-desc">{project.fullDescription.intro}</p>
              
              {project.fullDescription.features && (
                <ul className="project-features-list">
                  {project.fullDescription.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              )}
              
              <p className="main-desc" style={{ whiteSpace: 'pre-line' }}>
                {project.fullDescription.outro}
              </p>
            </div>
          </div>
    </section>
  

      {/* HOW I BUILT IT */}
      <section className="detail-section gray-bg">
        <div className="container">
          <h3 className="section-title">How I built it</h3>
          <div className="impl-grid">
            {project.implementation.map((item, idx) => (
              <div key={idx} className="impl-card">
                <CheckCircle2 size={18} className="green-icon" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISUAL TOUR - GALERIJA PROJEKTA */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="detail-section">
          <div className="container">
            <h3 className="section-title">Visual Tour</h3>
            
            <div className="compact-gallery">
              {project.gallery.map((item, idx) => (
                <div key={idx} className={`gallery-row ${item.isCompact ? 'compact-row' : ''}`}>
                  
                  <div className={`gallery-img-box ${item.isCompact ? 'compact-img' : ''}`}>
                    <img src={item.img} alt={item.title} />
                  </div>

                  <div className="gallery-text">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>

            </div>
            ))}
</div>
          </div>
        </section>
      )}


      
      <section className="project-cta">
        <div className="container">
          <h2>Interested in the code?</h2>
          <p>Check out the full repository and implementation details on GitHub.</p>
          <a href={project.github} target="_blank" rel="noreferrer" className="github-big-btn">
            <Github size={22} /> Explore Repository
          </a>
        </div>
      </section>

      
      <Contact />
    </div>
  );
};

export default ProjectLayout;