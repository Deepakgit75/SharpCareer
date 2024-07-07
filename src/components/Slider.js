import React, { useEffect, useState } from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Mousewheel, Keyboard } from 'swiper/modules';
import testimonials from '../data/testimonials';
import { IoLocationSharp } from "react-icons/io5";
import she from "../assets/she-user.jpg";
import he from "../assets/he-user.jpg";


const Slider = () => {

    const [slidesPerView, setSlidesPerView] = useState(4);

    const handleResize = () => {
      window.innerWidth >= 1000 && setSlidesPerView(3);
      window.innerWidth < 1000  && setSlidesPerView(2);
    }
  
    useEffect(() =>{
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <div>
        <div className='flex text-[10px] text-justify gap-4 '>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={20}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    infinite:true,
                  }}
                loop={true}
                cssMode={true}
                // navigation={true}
                mousewheel={true}
                keyboard={true}
                modules={[Autoplay, Mousewheel, Keyboard]}
                className={"w-[98%] h-30"} 
            >
                {
                    testimonials.map((card, index) => (
                        <SwiperSlide key={index}
                            className={`w-[500px] pt-4 flex flex-row border-[#4F46E5] border-2 shadow-xl rounded-xl ${index % 2 === 0 ? " bg-[#ffffff] ":" bg-[#ffffff] " }`}
                        >
                            <div className='flex flex-col m-4 '>
                              <img className='h-11 w-11 rounded-full' src={`${index % 2 === 0 ? he:she }`} alt='user'></img>
                                {/* <FaUserCircle className='mx-auto text-black bg-white rounded-full text-4xl'/> */}
                                <p className='text-2xl font-semibold p-2'>{card.name}</p>
                                <div className='overflow-none h-32 text-justify py-2'>
                                    <p className='text-black mx-4 font-medium text-sm mb-2'>
                                    {card.feedback}
                                    </p>
                                    <p className='text-black mx-4 flex flex-row pr-auto font-normal text-sm overflow-hidden'>
                                      <IoLocationSharp className=' text-lg text-[#4F46E5] ' />  {card.location}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </div>
  )
}

export default Slider

