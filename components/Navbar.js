import { useState } from 'react';
import RouterHandler from './RouterHandler';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setIsOpen(false); // Fermer le menu après le scroll avec un délai
      }, 500); // Ajuster le délai selon vos besoins
    }
  };

  return (
    <nav className="navbar">
      <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#homeSection" onClick={(e) => { e.preventDefault(); scrollToSection('homeSection'); }}>Accueil</a></li>
        <li><a href="#servicesSection" onClick={(e) => { e.preventDefault(); scrollToSection('servicesSection'); }}>Services</a></li>
        <li><a href="#tarifsSection" onClick={(e) => { e.preventDefault(); scrollToSection('tarifsSection'); }}>Tarifs</a></li>
        <li><a href="#contactSection" onClick={(e) => { e.preventDefault(); scrollToSection('contactSection'); }}>Contact</a></li>
      </ul>
      <RouterHandler setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
