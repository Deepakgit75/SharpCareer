import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ServiceExploration from '../components/ServiceExploration';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
// import ToggleMode from '../components/ToogleMode';


const Home = () => {
  return (
    <div>
      <Header />
      <div className='bg-gradient-to-b from-blue-200'>
        <Hero />
        <ServiceExploration />
        <Testimonial/>
      </div>
      <Footer />
      {/* <ToggleMode /> */}
    </div>
  );
};

export default Home;
