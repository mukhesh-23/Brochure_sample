import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <section className="location">
      <h2>Visit Us</h2>
      <p>123 Food Street, Tasty City, FC 12345</p>
      <div className="map">
        {/* Embed a Google Map here */}
        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;