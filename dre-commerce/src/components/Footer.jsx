import React from 'react'
import { logoLight, paymentLogo } from '../assets';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, Fahome, } from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='bg-black text-[#949494] py-20 font-titleFont'>
          <div className='max-w-screen-xl mx-auto'>
              <div className='flex flex-col gap-7'>
                  <img className='w-32' src={logoLight} alt="logoLight" />
                  <img className='w-32' src={paymentLogo} alt="payment logo" />
                  <div className='flex gap-5 text-lg text-gray-400'>
                      <FaYoutube className='hover:text-white duration-300 cursor-pointer' />
                      <FaFacebookF className='hover:text-white duration-300 cursor-pointer'/>
                      <FaTwitter className='hover:text-white duration-300 cursor-pointer'/>
                      <FaInstagram className='hover:text-white duration-300 cursor-pointer'/>
                  </div>
              </div>
      </div>
    </div>
  )
}

export default Footer;
