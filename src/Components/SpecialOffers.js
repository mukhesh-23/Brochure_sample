import React from "react";
import "./SpecialOffers.css";

const SpecialOffers = () => {
  const offers = [
    { title: "Buy 1 Get 1 Free Pizza", description: "Available every Friday" },
    { title: "20% Off on Beverages", description: "Happy hours from 4-6 PM daily" },
  ];

  return (
    <section id="special-offers" className="offers-section">
      <h2>Special Offers</h2>
      <div className="offers-list">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
