import React, {useState} from 'react'
import { BannerOne, Bannertwo } from '../assets/index';
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill  } from 'react-icons/bs';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + 2) % 2);//(currentSlide - 1 + 2) % 2 to go back to the previous slide.
  };

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % 2); //(currentSlide + 1) % 2 to advance to the next slide
  };



  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[500px] relative ">
        <div className="w-[400vw] h-full flex transition-transform duration-1000" style={{transform: `translateX(-${currentSlide*100}vw)`}}>
          <img
            className="w-screen h-full object-cover"
            src={BannerOne}
            alt="ImageOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-fill "
            src={Bannertwo}
            alt="ImageTwo"
            loading="priority"
          />
        </div>
        <div onClick={prevSlide} className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-10'>
          <div  className='text-2xl text-gray-700 hover:cursor-pointer hover:text-gray-300
          active:text-blue-500 duration-300'>
            <BsFillArrowLeftSquareFill />
          </div>
          <div onClick={nextSlide}  className='text-2xl text-gray-700 hover:cursor-pointer hover:text-gray-300 
          active:text-blue-500 duration-300'>
            <BsFillArrowRightSquareFill />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner
