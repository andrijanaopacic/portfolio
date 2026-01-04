import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, Globe, ShieldCheck, Database, Layout, Server, ArrowLeft } from 'lucide-react';
import "../styles/projectDetail.css";

// Uvezi slike (proveri putanje)
import njtPocetna from '../assets/njtSlika.png';
import njtOglasi from '../assets/njtKorisnik.png';
import njtAdmin from '../assets/njtAdmin.png';
import njtSacuvani from '../assets/njtSacuvani.png';

const CarSalesProject = () => {
  // Skroluj na vrh pri učitavanju
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="project-detail-page">
      {/* 1. HERO SECTION */}
      <section className="project-hero">
        <Link to="/" className="back-link"><ArrowLeft size={20} /> Back to Portfolio</Link>
        <div className="container">
          <span className="project-category">Full-Stack Development</span>
          <h1>Car Sales Platform</h1>
          <p className="project-tagline">
            A comprehensive software system for modernizing digital car commerce, 
            built with Spring Boot and React.
          </p>
          <div className="hero-btns">
            <a href="https://github.com/andrijanaopacic/napredneJavaTehnologije" target="_blank" rel="noreferrer" className="btn-main">
              <Github size={20} /> View Source Code
            </a>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW & CHALLENGE */}
      <section className="project-content section-padding">
        <div className="container grid-2">
          <div className="content-text">
            <h2>Project Overview</h2>
            <p>
              In today's market, speed and accessibility are key. This project provides 
              a digital bridge between sellers and buyers, allowing users to browse, 
              manage, and post car advertisements in real-time without physical limitations.
            </p>
            <p>
              The challenge was to build a system that is both <strong>scalable for high 
              traffic</strong> and <strong>secure for user data</strong>, ensuring 
              administrative control over content quality.
            </p>
          </div>
          <div className="content-stats">
            <div className="stat-card">
              <Server size={30} />
              <h4>Backend</h4>
              <p>Spring Boot / Java</p>
            </div>
            <div className="stat-card">
              <Layout size={30} />
              <h4>Frontend</h4>
              <p>React / Axios</p>
            </div>
            <div className="stat-card">
              <Database size={30} />
              <h4>Database</h4>
              <p>MySQL / JPA</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TECHNICAL ARCHITECTURE (Ovo poslodavci obožavaju) */}
      <section className="tech-deep-dive section-padding">
        <div className="container">
          <h2>Technical Implementation</h2>
          <div className="tech-grid">
            <div className="tech-box">
              <ShieldCheck className="icon" />
              <h3>Security & Auth</h3>
              <p>
                Implemented <strong>Spring Security with JWT</strong>. This stateless 
                approach eliminates the need for server sessions, using tokens for 
                secure API communication and role-based access (User vs Admin).
              </p>
            </div>
            <div className="tech-box">
              <Database className="icon" />
              <h3>Data Management</h3>
              <p>
                Used <strong>MySQL</strong> with <strong>Spring Data JPA</strong>. 
                Leveraged automatic query generation and structured relational mapping 
                for efficient handling of car listings and user favorites.
              </p>
            </div>
            <div className="tech-box">
              <Globe className="icon" />
              <h3>API Design</h3>
              <p>
                Developed a <strong>RESTful API</strong> ensuring standardized data 
                exchange, which allows for future integration with mobile platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VISUAL GALLERY (Showcasing Screenshots) */}
      <section className="project-gallery section-padding">
        <div className="container">
          <h2>Interface Experience</h2>
          
          <div className="gallery-item">
            <div className="gallery-info">
              <h3>User Marketplace</h3>
              <p>Clean and intuitive browsing experience. Users can filter listings by brand, model, price, or fuel type to find exactly what they need.</p>
            </div>
            <img src={njtOglasi} alt="Marketplace view" className="gallery-img" />
          </div>

          <div className="gallery-item reverse">
            <img src={njtAdmin} alt="Admin Dashboard" className="gallery-img" />
            <div className="gallery-info">
              <h3>Admin Control Panel</h3>
              <p>Privileged access for administrators to maintain platform integrity. Features include ad activation/deactivation and full content moderation.</p>
            </div>
          </div>

          <div className="gallery-item">
            <div className="gallery-info">
              <h3>Personalized Space</h3>
              <p>Registered users can track their saved ads and manage their own listings through a dedicated dashboard.</p>
            </div>
            <img src={njtSacuvani} alt="Saved ads view" className="gallery-img" />
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION */}
      <section className="project-footer section-padding">
        <div className="container text-center">
          <h2>Interested in the code?</h2>
          <p>Check out the full repository and implementation details on GitHub.</p>
          <a href="https://github.com/andrijanaopacic/napredneJavaTehnologije" target="_blank" rel="noreferrer" className="btn-main large">
             <Github size={24} /> Explore Repository
          </a>
        </div>
      </section>
    </div>
  );
};

export default CarSalesProject;