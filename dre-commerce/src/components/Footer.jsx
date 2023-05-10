import React from 'react'
import { logoLight, paymentLogo } from '../assets';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome, } from 'react-icons/fa';
import {BsPersonFill, BsPaypal,} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4">
        <div className="flex flex-col gap-7">
          <img className="w-32 h-7" src={logoLight} alt="logoLight" />
          <img className="w-32" src={paymentLogo} alt="payment logo" />
          <div className="flex gap-5 text-lg text-gray-400">
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Ohio district</p>
            <p>Mobile: 278 7679937</p>
            <p>Phone: 00055845225</p>
            <p>Email: reactdev@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className='flex flex-col gap-3'>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              My account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              Checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>
              Order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>
              Help & support
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <input className='bg-transparent border px-4 py-2 text-sm' type="text" placeholder='e-mail'/>
          <button className='text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black'>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
