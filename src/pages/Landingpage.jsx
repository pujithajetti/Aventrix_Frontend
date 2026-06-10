import React from 'react';

import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Statistics from '../components/Statistics';
import MainCard from '../components/Highlights/MainCard';
import Services from '../components/Services';
import About from '../components/About';
import Testimonal from '../components/Testimonal';
import Footer from '../components/Footer';


const Landingpage = () => {
  return (
    <div>

      <div id="home">
        <Hero />
      </div>

      <Trust />

      <Statistics />

      <div id="features">
        <MainCard />
      </div>

      <div id="services">
        <Services />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="testimonials">
        <Testimonal />
        </div>

      <Footer />

    </div>
  );
}

export default Landingpage;
