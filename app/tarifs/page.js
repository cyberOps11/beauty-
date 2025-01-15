import React from 'react';
import '../../styles/globals.css';

const TarifsPage = () => {
  return (
    <section className="section">
      <h2>Nos Tarifs</h2>
      <p>Voici nos tarifs pour chaque service proposé.</p>
      <div className="service-list">
        <p>Soins du visage : 50€</p>
        <p>Épilation : 30€</p>
        <p>Massages : 60€</p>
        <p>Maquillage : 40€</p>
      </div>
    </section>
  );
};

export default TarifsPage;
