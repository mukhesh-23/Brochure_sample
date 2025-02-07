import React from "react";
import "./Menu.css";

const Menu = () => {
  const menuItems = [
    { name: "Pizza Margherita", price: "$12" },
    { name: "Spaghetti Carbonara", price: "$15" },
    { name: "Caesar Salad", price: "$10" },
    { name: "Grilled Salmon", price: "$20" },
  ];

  return (
    <section id="menu" className="menu-section">
      <h2>Our Menu</h2>
      <ul className="menu-list">
        {menuItems.map((item, index) => (
          <li key={index} className="menu-item">
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;
