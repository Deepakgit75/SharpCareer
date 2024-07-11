// import React from 'react';
// import service from '../assets/service-exploration.jpeg';
// import { FaArrowRightLong } from "react-icons/fa6";

// const ServiceExploration = () => {
//   return (
//     <section className="py-10 px-5">
//       <div className="container mx-auto flex items-center justify-center">
//         <div className="flex-1 p-6 w-full px-10 ">
//           <img className='h-72 w-[80%]' src={service} alt="Explore Services" />
//         </div>
//         <div className="flex-1">
//           <h2 className="text-4xl  text-wrap w-[40%] font-bold mb-4">Explore our <span className='text-green-600'> Services</span></h2>
//           <a href="/services" className="bg-blue-700 text-white flex flex-row w-28 gap-2 items-center text-lg px-4 py-2 rounded"> Services <FaArrowRightLong className=' text-xl font-semibold'/> </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServiceExploration;



import React from "react";
import service from "../assets/service-exploration.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import ac from "../assets/Ac-repairing.jpeg";

const ServiceExploration = () => {
  return (
    <section className="py-10 px-5 bg-blue-100 ">
      <div className="container mx-auto  flex items-center justify-center">
        <div className="flex-1 p-6 w-full px-10 ">
          <img className="w-auto h-96 " src={service} alt="Explore Services" />
        </div>

        <div className="flex-1">
          <h2 className="text-4xl left-10  w-[60%] font-bold mb-4">
            Explore our 
            <span className="text-green-600"> Services</span>
          </h2>
          <a
            href="/services"
            className="bg-blue-700 text-white flex flex-row w-28 gap-2 items-center text-lg px-4 py-2 rounded"
          >
           Services{" "}
            <FaArrowRightLong className=" text-xl font-bold" />{" "}
          </a>
        </div>
      </div>

      <h1 className=" mt-14 text-blue-950 font-bold text-center text-5xl ">
        What's includes
      </h1>
      <div className="w-full h-full mt-2 flex flex-col bg-blue-100 items-center justify-start pt-10 ">
        <div className="w-[95%] sm:w-[80%]  gap-14 ">
          <div className="w-full flex lg:h-80 gap-2  lg:gap-20 lg:flex-row">
              <img
                src={ac}
                alt=""
                className=" mr-20 object-fill bg-white justify-start w-auto h-80 hover:opacity-50"
              />
            <div className="lg:w-6/12 xl:w-5/12 lg:h-full flex flex-col items-center lg:items-start justify- gap-6 lg:gap-1">
              <div className="flex flex-col  lg:items-start lg:h-[75%] gap-6">
                <h4 className="text-black font-bold text-3xl mt-10 ">
                  Unlimited conversations with Appliance Technicians
                </h4>
                <p className="text-xl  leading-none tracking-wide text-highlighter mt-3 ">
                  Connect with a verified appliance technician in minutes. No
                  need for expensive in-home service calls. No appointments. No
                  waiting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceExploration;
