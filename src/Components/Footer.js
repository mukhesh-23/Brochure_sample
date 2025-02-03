import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Contact us: (123) 456-7890 | info@deliciousbites.com</p>
      <div className="social-links">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
        <a href="https://twitter.com">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;