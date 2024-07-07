import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className="w-full py-8 flex flex-col justify-start items-center gap-10 font-sans tracking-tight">
      <div className='mt-5 flex flex-col gap-2 items-center justify-center text-black'>
        <h1 className='text-5xl font-bold'>The ServicePros</h1>
        <p className='text-xl font-semibold'> Your appliance care experts! </p>
        <p className='line-height:2px text-lg '> We are providing services like</p>
          <p className="text-green-600 font-bold text-center text-highlighter text-4xl">
          <Typewriter 
              words={[" AC", " Washing Machine", " Refrigerator", " LED"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
      </div>
      <div className="mt-2 flex flex-row justify-between items-center md:gap-64">
        <div>
          <h1 className="text-3xl font-bold">500+</h1>
          <p className='text-gray-600'>Clients</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">100+</h3>
          <div className="flex gap-2 text-gray-600">
            <span>Cities</span>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold flex gap-2 items-center">
            24*7
          </h3>
          <h5 className='text-gray-600'>Available</h5>
        </div>
      </div>
    </div>
  );
};

export default Hero;
