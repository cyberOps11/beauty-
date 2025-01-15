'use client';
import '../styles/globals.css';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Fermer le menu après le scroll
  };

  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Bienvenue chez Harmonie Beauté</h1>
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
            </nav>
          </header>
          <main>
            {children}
          </main>
          <footer id="contactSection" className="footer">
            <p>&copy; 2025 Harmonie Beauté. Tous droits réservés.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
