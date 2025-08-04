import { useEffect, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'projects', 'contact'];
      let found = 'home';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 80) {
          found = section;
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav aria-label="Main navigation" role="navigation">
      <div className="nav-container">
        <h2>Ajay Portfolio</h2>
        <ul>
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              tabIndex="0"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              tabIndex="0"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeSection === 'education' ? 'active' : ''}
              tabIndex="0"
            >
              Education
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              tabIndex="0"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              tabIndex="0"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;