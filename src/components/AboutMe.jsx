import React, { useState } from "react";
import "../styles/AboutMe.css";

function AboutMe() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="about-section" onMouseMove={handleMouseMove}>
      {/* Main text */}
      <p className="about-text">
        I am a fourth-year student at the Faculty of Organizational Sciences, with experience in various student projects that helped me develop strong skills in teamwork, organization, problem-solving, and adaptability. I am eager to gain new skills through practical experience in software development, working on real projects and contributing to solutions with tangible impact.
      </p>

      {/* Magnifier overlay */}
      <div
        className="magnifier"
        style={{
          left: mousePos.x,
          top: mousePos.y,
        }}
      >
        <p className="magnifier-text">
          I am a fourth-year student at the Faculty of Organizational Sciences, with experience in various student projects that helped me develop strong skills in teamwork, organization, problem-solving, and adaptability. I am eager to gain new skills through practical experience in software development, working on real projects and contributing to solutions with tangible impact.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
