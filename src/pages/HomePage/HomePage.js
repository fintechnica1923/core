import React from 'react';
import './HomePage.css';
import Hero from '../../components/Hero/Hero';
import Concept from '../../components/Concept/Concept';
import Portfolio from '../../components/Portfolio/Portfolio';
import Services from '../../components/Services/Services';
import Expertise from '../../components/Expertise/Expertise';
import Materials from '../../components/Materials/Materials';

function HomePage() {
  return (
    <div className="wrapper">
      <Hero />
      <Concept />
      <Portfolio />
      <Services />
      <Expertise />
      <Materials />
    </div>
  );
}

export default HomePage;
