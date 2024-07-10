import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BsTransparency } from "react-icons/bs";
import { RiShieldStarLine } from "react-icons/ri";
import { MdOutlineBadge } from "react-icons/md";
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className=''>
      <Header />
      <section className="bg-gradient-to-b from-blue-200 py-10 flex flex-col justify-center items-center">
        <div className='justify-center text-center'>
          <h1 className='mb-2 text-4xl font-bold'>
            About Us
          </h1>
          <p className='text-wrap w-[60%] text-center mx-auto'>We offer diverse household & commercial services: appliance repair, servicing, installation for any model. Our 24/7 call center ensures help in emergencies. Schedule now for swift doorstep assistance!</p>
        </div>
        <div className=' flex flex-row m-4 p-4'>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-blue-800 w-10 h-10 rounded-md p-1 items-center justify-center'>
              <BsTransparency className='text-white text-3xl'/>
            </div>
            <h2 className='font-medium text-xl p-2'>Transparancy</h2>
            <p className='text-center px-5'>We are <span className='font-semibold'>100% transparent</span>. No more extra bills for “additional services”. With us, you will always know exactly how much the restoration will cost.</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-blue-800 w-10 h-10 rounded-md p-1 items-center justify-center'>
              <RiShieldStarLine className='text-white text-3xl'/>
            </div>
            <h2 className='font-medium text-xl p-2'>Complete Warranty</h2>
            <p className='text-center px-5'>With 20+ years of experience in appliance repair You can be sure of the end result. In addition, every repair comes with a <span className='font-semibold'>3-month warranty</span>.</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='bg-blue-800 w-10 h-10 rounded-md p-1 items-center justify-center'>
              <MdOutlineBadge className='text-white text-3xl'/>
            </div>
            <h2 className='font-medium text-xl p-2'>Licensed Technicians</h2>
            <p className='text-center px-5'>Our technicians are capable of dealing with home appliances of any type and manufacturer. We have all the necessary and <span className='font-semibold'>up-to-date certifications</span>.</p>
          </div>
        </div
        </section>
      <Footer />
    </div>
  );
};

export default AboutUs;
