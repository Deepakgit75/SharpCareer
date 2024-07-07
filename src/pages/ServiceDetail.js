import React from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
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

const ServiceDetail = () => {
  const getShortDescription = (description) => {
    const match = description.match(/^[^,.]+[,.]/);
    return match ? match[0] : description;
  };

  const { serviceId } = useParams();
  console.log(serviceId);

  const service = services.find((s) => s.id === serviceId);
  console.log(service.title);

  if (!service) {
    return (
      <div className="container mx-auto py-10 text-black">
        Service not found
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section className="bg-white">
        <div className="flex flex-col justify-center items-center">
          <img className="-z-0 w-full " src={service?.image} alt="appliance" />
          <div className="w-max absolute -mt-28">
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 pb-5 bg-clip-text text-5xl text-transparent bg-gradient-to-r from-pink-600 to-violet-600 font-bold">
            {service?.title}
            </h1>
          </div>
          <p className="absolute text-3xl mt-24 text-red-900 w-1/2 text-center backdrop-blur-md shadow-sm ">
            {getShortDescription(service.description)}
          </p>
          <button className="absolute mt-64 justify-center items-center bg-gradient-to-r from-blue-500 to-red-500 text-white px-4 py-2 text-xl rounded font-medium focus:ring ring-black ring-opacity-10 gradient element-to-rotate">
           <Link to={"/services/book"} >Book Now</Link>
          </button>
        </div>
        <div className="flex flex-col container mx-auto pt-4 items-center justify-center bg-gradient-to-b from-blue-100">
          <h1 className="text-4xl font-bold mb-4 text-blue-900 ">
            {service?.title}
          </h1>
          <p className="text-md font-normal px-20 pb-5 text-center w-4/5">
            {service?.description}
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServiceDetail;
