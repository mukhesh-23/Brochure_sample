import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🍴 Restaurant Name</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#special-offers">Special Offers</a></li>
          <li><a href="#location">Location</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
