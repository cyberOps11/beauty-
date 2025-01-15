import React from 'react';
import '../styles/globals.css';

const HomePage = () => {
  return (
    <div className="container">
      <section id="homeSection" className="home-section">
        <div className="home-section-image-container">
          <img src="/images/home.jpg" alt="Home" className="home-section-image" />
        </div>
        <div className="home-section-text-container">
          <h2>Bienvenue chez Harmonie Beauté</h2>
          <p>Votre esthéticienne de confiance pour des soins de qualité.</p>
          <p>Découvrez nos services et prenez rendez-vous dès aujourd'hui.</p>
        </div>
      </section>

      <section id="servicesSection" className="section">
        <div className="section-text-container">
          <h2>Nos Services</h2>
          <p>Découvrez nos différents services pour prendre soin de vous.</p>
          <div className="service-list">
            <p>Soins du visage</p>
            <p>Épilation</p>
            <p>Massages</p>
            <p>Maquillage</p>
          </div>
        </div>
        <div className="section-image-container">
          <img src="/images/services.jpg" alt="Services" className="section-image" />
        </div>
      </section>

      <section id="tarifsSection" className="tarifs-section reverse">
        <div className="tarifs-section-image-container">
          <img src="/images/tarifs.jpg" alt="Tarifs" className="tarifs-section-image" />
        </div>
        <div className="tarifs-section-text-container">
          <h2>Nos Tarifs</h2>
          <p>Voici nos tarifs pour chaque service proposé.</p>
          <div className="service-list">
            <p>Soins du visage: 50€</p>
            <p>Épilation: 30€</p>
            <p>Massages: 60€</p>
            <p>Maquillage: 40€</p>
          </div>
        </div>
      </section>

      <section id="contactSection" className="section">
        <div className="section-text-container">
          <h2>Contact</h2>
          <p>Adresse: 123 Rue de la Beauté, 75000 Paris</p>
          <p>Téléphone: 01 23 45 67 89</p>
          <p>Email: contact@harmoniebeaute.com</p>
        </div>
        <div className="section-image-container">
          <img src="/images/contact.png" alt="Contact" className="section-image" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
