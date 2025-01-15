'use client'; // Add this line at the top
import '../styles/globals.css';
import Link from 'next/link';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Bienvenue chez Harmonie Beauté</h1>
            <nav className="navbar">
              <div className={`burger-menu ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className={`bar1 ${isOpen ? 'close' : ''}`}></div>
                <div className={`bar2 ${isOpen ? 'close' : ''}`}></div>
                <div className={`bar3 ${isOpen ? 'close' : ''}`}></div>
              </div>
              <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link href="/">Accueil</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/tarifs">Tarifs</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>
          {children}
          <footer className="footer">
            <p>&copy; 2025 Harmonie Beauté. Tous droits réservés.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
