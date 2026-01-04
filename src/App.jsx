import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectLayout from "./components/ProjectLayout"; // 👈 Uvozimo samo jedan Layout

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-content">
          <a href="/" className="logo">AO</a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li> 
            <li><a href="/#projects">Projects</a></li> 
            <li><a href="/#contact">Contact</a></li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Projects />
            <Contact />
          </>
        } />

        {/* DINAMIČKA RUTA: Bilo koji broj posle /project/ će otvoriti isti šablon */}
        <Route path="/project/:id" element={<ProjectLayout />} />
      </Routes>
    </div>
  );
}

export default App;