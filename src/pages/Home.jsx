import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

import Hero from '../components/Hero';
import About from '../components/About';
import WhoWeAre from '../components/WhoWeAre';
import WhyChooseUs from '../components/WhyChooseUs';
import DevelopmentProcess from '../components/DevelopmentProcess';
import Team from '../components/Team';
import Testimonials from '../components/Testimonials';
import PricingSection from '../components/PricingSection';

const Home = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <WhoWeAre />
      <WhyChooseUs />
      <PricingSection />
      <DevelopmentProcess />
      <Team />
      <Testimonials />
    </div>
  );
};

export default Home;
