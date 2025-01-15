import '../styles/globals.css';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          <header className="header">
            <h1>Bienvenue chez Harmonie Beauté</h1>
            <nav className="navbar">
              <ul>
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
