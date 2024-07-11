import React from 'react';
import Slider from './Slider';

const Testimonial = () => {
    return (
        <div className=''>
            <section id='testimonial' className=" py-10">
                <div className="container mx-auto">
                    <h2 className="font-bold text-blue-950 text-5xl text-center mb-8">Testimonials</h2>
                    <h2 className="text-3xl font-semibold mb-6 text-center">Here is what our clients are saying About Us</h2>
                      <Slider/>
                </div>
            </section>
        </div>
    )
}

export default Testimonial