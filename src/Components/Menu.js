import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Margherita Pizza', price: '$10' },
    { id: 2, name: 'Pasta Carbonara', price: '$12' },
    { id: 3, name: 'Grilled Salmon', price: '$15' },
    { id: 4, name: 'Tiramisu', price: '$6' },
  ];

  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Menu;