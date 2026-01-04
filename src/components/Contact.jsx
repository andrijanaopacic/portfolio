import React from 'react';
import { Mail, Phone, Linkedin, Github, ArrowUpRight, Code2 } from 'lucide-react';
import "../styles/contact.css";

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section" id="contact">
      <div className="footer-container">
        
        {/* Gornji deo: Naslov i Kratka Biografija */}
        <div className="footer-header">
          <span className="projects-badge">Contact</span>
          <h2>About Me</h2>
          <p className="footer-bio">
            Feel free to reach out via LinkedIn, GitHub, or email to collaborate or learn more about my projects.
          </p>
        </div>

        {/* Grid sa kontaktima */}
        <div className="contact-grid">
          <a href="mailto:andrijana.opacic04@gmail.com" className="contact-card">
            <div className="contact-icon"><Mail size={22} /></div>
            <div className="contact-info">
              <span>Email</span>
              <p>andrijana.opacic04@gmail.com</p>
            </div>
            <ArrowUpRight className="card-arrow" size={18} />
          </a>

          <a href="https://www.linkedin.com/in/andrijana-opačić-2a2104333" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon"><Linkedin size={22} /></div>
            <div className="contact-info">
              <span>LinkedIn</span>
              <p>andrijana-opačić</p>
            </div>
            <ArrowUpRight className="card-arrow" size={18} />
          </a>

          <a href="https://github.com/andrijanaopacic" target="_blank" rel="noopener noreferrer" className="contact-card">
            <div className="contact-icon"><Github size={22} /></div>
            <div className="contact-info">
              <span>GitHub</span>
              <p>andrijanaopacic</p>
            </div>
            <ArrowUpRight className="card-arrow" size={18} />
          </a>

          <a href="tel:+381655527866" className="contact-card">
            <div className="contact-icon"><Phone size={22} /></div>
            <div className="contact-info">
              <span>Call Me</span>
              <p>+381 65 5527866</p>
            </div>
            <ArrowUpRight className="card-arrow" size={18} />
          </a>
        </div>

        {/* Donji deo: Credits & Tech Stack */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Andrijana Opačić. All rights reserved.
            </p>
            <div className="footer-tech">
              <Code2 size={16} />
              <span>Designed & Developed by me using <strong>React & Three.js</strong></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;