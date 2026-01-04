import Lanyard from "./Lanyard";
import { Link } from "react-router-dom";

export default function Hero() {
  const skills = [
    "Java", "C", "Python", "React", "Spring Boot", "SQL", 
    "WordPress", "Adobe Premiere Pro", "CapCut", "Canva", 
    "Microsoft Office", "English"
  ];

  return (
    <section className="hero">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="hero-grid">
        <div className="hero-card-container">
          <Lanyard />
        </div>

        <div className="hero-text">
          <span className="badge">Open for New Opportunities</span>
          <h1>Andrijana Opačić</h1>
          
          <p className="description">
            I am a final-year student at the Faculty of Organizational Sciences, 
            specializing in Software Engineering. I am gradually getting more involved 
            in the field, working on projects that allow me to develop practical skills. 
            I am currently looking for internships in related areas to gain further 
            experience and learn more. I enjoy teamwork and organization, and have 
            led various student projects, collaborating with different departments 
            and managing teams effectively.
          </p>

          <div className="tech-stack">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>

          <div className="hero-actions">
            <a href="/moj-cv.pdf" download="Andrijana_Opacic_CV.pdf" className="btn-primary">
              Download CV
            </a>
            <a href="#contact" className="btn-secondary">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}