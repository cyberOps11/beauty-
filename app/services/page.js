import React from 'react';
import '../../styles/globals.css';

const ServicesPage = () => {
  return (
    <section className="section">
      <h2>Nos Services</h2>
      <img src="/images/services.jpg" alt="Services" className="section-image" />
      <p>Découvrez nos différents services pour prendre soin de vous.</p>
      <div className="service-list">
        <p>Soins du visage</p>
        <p>Épilation</p>
        <p>Massages</p>
        <p>Maquillage</p>
      </div>
    </section>
  );
};

export default ServicesPage;
