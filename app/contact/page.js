import React from 'react';
import '../../styles/globals.css';

const ContactPage = () => {
  return (
    <section id="contactSection" className="section">
      <h2>Contact</h2>
      <img src="/images/contact.jpg" alt="Contact" className="section-image" />
      <p>Adresse: 123 Rue de la Beauté, 75000 Paris</p>
      <p>Téléphone: 01 23 45 67 89</p>
      <p>Email: contact@harmoniebeaute.com</p>
    </section>
  );
};

export default ContactPage;
