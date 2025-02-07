import React from "react";
import "./Location.css";

const Location = () => {
  return (
    <section id="location" className="location-section">
      <h2>Find Us</h2>
      <p>123 Foodie Street, Flavor Town, USA</p>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
};

export default Location;
