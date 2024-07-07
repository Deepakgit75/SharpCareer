import React from 'react';
import service from '../assets/service-exploration.jpeg';
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceExploration = () => {
  return (
    <section className="py-10 px-5">
      <div className="container mx-auto flex items-center justify-center">
        <div className="flex-1 p-6 w-full px-10 ">
          <img className='h-72 w-[80%]' src={service} alt="Explore Services" />
        </div>
        <div className="flex-1">
          <h2 className="text-4xl  text-wrap w-[40%] font-bold mb-4">Explore our <span className='text-green-600'> Services</span></h2>
          <a href="/services" className="bg-blue-700 text-white flex flex-row w-28 gap-2 items-center text-lg px-4 py-2 rounded"> Services <FaArrowRightLong className=' text-xl font-semibold'/> </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceExploration;
