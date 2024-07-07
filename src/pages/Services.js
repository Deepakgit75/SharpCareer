import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ac from "../assets/ac-repair.jpg";
import freez from "../assets/refrigrator.jpg";
import led from "../assets/led-service.jpg";
import machine from "../assets/washing-machine.jpg";
import "../index.css";

const services = [
  {
    id: "ac-repair",
    title: "AC Repairing Service",
    description:
      "Our AC Repairing Service ensures your air conditioning system operates at peak performance. We offer thorough maintenance, cleaning, and repair services for all AC units. Our experienced technicians diagnose issues quickly and provide efficient solutions to keep your home cool and comfortable. Regular servicing prevents costly breakdowns and extends the lifespan of your AC unit, ensuring optimal energy efficiency and indoor air quality.",
    image: ac,
  },
  {
    id: "refrigerator-service",
    title: "Refrigerator Service",
    description:
      "Our Refrigerator Service keeps your appliance running smoothly, ensuring your food stays fresh and safe. We provide comprehensive maintenance, troubleshooting, and repair services for all refrigerator brands and models. From fixing cooling issues to replacing faulty components, our skilled technicians handle it all. Regular servicing helps prevent unexpected breakdowns, extends the life of your refrigerator, and maintains its efficiency, saving you time and money in the long run.",
    image: freez,
  },
  {
    id: "washing-machine-service",
    title: "Washing Machine Service",
    description:
      "Our Washing Machine Service ensures your appliance runs efficiently, providing clean and fresh laundry every time. We offer routine maintenance, diagnostic services, and repairs for all types of washing machines. Our experienced technicians address common issues like leaks, spin cycle problems, and electrical faults. Regular servicing not only prevents major breakdowns but also prolongs the lifespan of your washing machine, ensuring it operates at optimal performance and reduces energy consumption.",
    image: machine,
  },
  {
    id: "led-service",
    title: "LED Service",
    description:
      "Our LED Service includes installation, maintenance, and repair of all LED lighting systems. Whether for residential or commercial use, we ensure your LED lights function perfectly, providing bright and energy-efficient illumination. Our technicians are skilled in troubleshooting and fixing flickering lights, dimming issues, and wiring problems. Regular servicing enhances the longevity of your LED lights, reduces energy costs, and ensures a well-lit, comfortable environment in your home or office.",
    image: led,
  },
];

const Services = () => {
  return (
    <div>
      <Header />
      <section className="bg-gradient-to-b from-blue-200  py-10">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
          <div className="space-y-4 p-4">
            {services.map((service, index) => (
              <div key={index} className={`p-6 rounded `}>
                <div className='w-fit'>
                  <h2 className="text-2xl mb-2 text-left animate-type overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 pb-5 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-violet-600 font-bold">{service.title}</h2>
                </div>

                <div className={`flex justify-around items-center  ${ index%2 ?" flex-row-reverse" : "flex-row" }`}>
                  <p className='text-center font-normal w-[40%] text-lg'>{service.description.slice(0, 150)}...<a href={`/services/${service.id}`} className=" text-violet-600">
                    Read More
                  </a></p>
                  <img className='rounded-lg h-80' src={service.image} alt='service'></img> 
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
