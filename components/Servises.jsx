import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import img1 from '../src/assets/1.png';
import img2 from '../src/assets/4.jpg';
import img3 from '../src/assets/3.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Services = () => {
  return (
    <div className='bg-red pt-6 mx-auto w-4/5 mb-6'>
      <Carousel
        infiniteLoop
        autoPlay
        interval={1500}
        showStatus={false}
        showArrows={false}
        showThumbs={false}
      >
        <div className='services-carousel-item bg-green-500'>
          <img src={img1} alt="Slide 1" />
          <h1 className='text-xl uppercase'>Web Banner</h1>
        </div>
        <div className='services-carousel-item'>
          <img src={img2} alt="Slide 2" />
          <h1 className='text-xl uppercase'>Computer</h1>
        </div>
        <div className='services-carousel-item'>
          <img src={img3} alt="Slide 3" />
          <h1 className='text-xl uppercase'>Development</h1>
        </div>
      </Carousel>
    </div>
  );
}

export default Services;
