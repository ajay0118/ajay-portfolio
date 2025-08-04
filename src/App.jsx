import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Contacts from './components/Contact';
import Footer from './components/Footer';

import './index.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Function to scroll to element with navbar offset
    const scrollToElement = (elementId) => {
      const targetElement = document.querySelector(elementId);
      const navbar = document.querySelector('nav');
      
      if (targetElement && navbar) {
        const navbarHeight = navbar.offsetHeight;
        const targetPosition = targetElement.offsetTop - navbarHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Handle smooth scrolling with offset for sticky navbar
    const handleSmoothScroll = (e) => {
      const targetId = e.target.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        scrollToElement(targetId);
      }
    };

    // Add event listeners to all nav links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Handle direct URL navigation (page refresh with hash)
    const handleHashNavigation = () => {
      if (window.location.hash) {
        // Small delay to ensure DOM is ready
        setTimeout(() => {
          scrollToElement(window.location.hash);
        }, 100);
      } else {
        // If no hash, ensure Hero section is properly positioned
        const heroSection = document.querySelector('#home');
        if (heroSection) {
          // Scroll to top to ensure Hero is fully visible
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    };

    // Call on initial load
    handleHashNavigation();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashNavigation);

    // Cleanup function
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;
