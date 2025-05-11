import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About' 
import WhoWeAre from '../components/WhoWeAre'
import WhyChooseUs from '../components/WhyChooseUs'
import DevelopmentProcess from '../components/DevelopmentProcess'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'


const Home = () => {
  return (
    <div>
       <Hero />
      <About />
      <WhoWeAre />
      <WhyChooseUs />
      <DevelopmentProcess />
      <Team />
      <Testimonials />
    </div>
  )
}

export default Home
