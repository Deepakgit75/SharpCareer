import React from 'react';
import { FaYoutube, FaFacebook, FaLinkedin, FaInstagram ,FaWhatsapp} from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=" bg-gradient-to-b from-blue-200 text-black">
      <div className='text-black pl-11 pt-4 text-left font-bold text-xl'>
       ServicePros
      </div>
      <div className='flex flex-row '>
        <div className='flex justify-center items-center'>
          <ul className='flex flex-row mx-10 space-x-6 text-xl justify-center items-center'>
            <li className='hover:text-blue-700'> <FaFacebook /></li>
            <li className='hover:text-blue-900'> <FaLinkedin /></li>
            <li className='hover:text-red-700'> <FaYoutube /></li>
            <li className='hover:text-red-600'> <FaInstagram /> </li>
            <li className='hover:text-green-600'> <FaWhatsapp /> </li>
          </ul>
        </div>
        <div className='ml-auto mr-10'>
          <div className="flex flex-row  justify-end space-x-28 ">
            <ul className='text-black space-y-3 p-2 mb-2 text-lg font-semibold'>Our Services 
              <li className="font-normal text-base"> <Link to={"/services/ac-repair"}> AC Repairing </Link> </li>
              <li className="font-normal text-base"> <Link to={"/services/refrigerator-service"}> Refrigerator</Link> </li>
              <li className="font-normal text-base"> <Link to={"/services/washing-machine-service"} > Washing Machine</Link> </li>
              <li className="font-normal text-base"> <Link to={"/services/led-service"} > LED Service</Link> </li>
            </ul>
            
            <ul className='text-black space-y-3 p-2 mb-2 text-lg font-semibold'>Follow Us
              <li className="font-normal text-base ">Facebook</li>
              <li className="font-normal text-base">Twitter</li>
              <li className="font-normal text-base">YouTube</li>
            </ul>
            <ul className='text-black space-y-3 p-2 mb-2 text-lg font-semibold'>Legal
              <li className="font-normal text-base ">Privacy Policy</li>
              <li className="font-normal text-base ">Terms & Conditions</li>
              <li className="font-normal text-base ">Contact Support</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container p-5 font-medium text-center">
       <p>&copy; 2023 The ServicePros. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
