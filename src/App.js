import React from 'react';
import Header from './Components/Header';
import Menu from './Components/Menu';
import SpecialOffers from './Components/SpecialOffers';
import Location from './Components/Location';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <SpecialOffers />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
