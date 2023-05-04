import React from 'react'
import { BannerOne } from '../assets/index'
import { Bannertwo } from '../assets/index'
import {BsFillArrowLeftSquareFill,BsFillArrowRightSquareFill  } from 'react-icons/bs';

const Banner = () => {
  
  return (
    <div className='w-full h-auto overflow-x-hidden'>
          <div className='w-screen h-[500px] relative '>
              <div className='w-[400vw] h-full flex'>
                  <img className='w-screen h-full object-cover'  src={BannerOne} alt="ImageOne" loading='priority' />
                  <img className='w-screen h-full object-cover'  src={Bannertwo} alt="ImageTwo" loading='priority' />
        </div> 
        <div>
        <BsFillArrowLeftSquareFill/>
        </div>
        <div>
        <BsFillArrowRightSquareFill/>
        </div>
      </div>
    </div>
  )
}

export default Banner
