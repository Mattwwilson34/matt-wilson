import './App.css';
import React from 'react';
import Nav from '../Nav';
import Header from '../Header';
import HeroImage from '../HeroImage';
import Footer from '../Footer';

const App = () => {
  return (
    <div>
      <Nav></Nav>
      <Header />
      <HeroImage />
      <Footer />
    </div>
  );
};

export default App;
