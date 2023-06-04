import React from 'react'
import {logoDark} from '../assets/index'
import { cartImg } from '../assets/index'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
        <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
            <Link to = "/">
                <div>
                  <img className="w-28" src={logoDark} alt="cartly dark" />
                </div>
            </Link>
              <div className="flex items-center gap-8">
              <ul className="flex items-center gap-8">
                      <li className="text-base text-black font-bold hover:text-orange-900
                   hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                   duration-300">Home</li>
                  <li className="text-base text-black font-bold hover:text-orange-900
                   hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                   duration-300">Pages</li>
                  <li className="text-base text-black font-bold hover:text-orange-900
                   hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                   duration-300">Shop</li>
                  <li className="text-base text-black font-bold hover:text-orange-900
                   hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                   duration-300">Element</li>
                  <li className="text-base text-black font-bold hover:text-orange-900
                   hover:underline underline-offset-2 decoration-[1px] cursor-pointer
                   duration-300">Blog</li>
          </ul>
          <div className='relative'>
            <img className='w-6' src={cartImg} alt="" />
            <span className='absolute w-6 top-1.5 left-0 text-sm flex items-center
            justify-center font-semibold '>0</span>
          </div>
          <img className='w-10 h-8 rounded-full' src="https://img.freepik.com/premium-vector/accoun-vector-icon-with-long-shadow-white-illustration-isolated-blue-round-background-graphic-web-design_549897-771.jpg?
          size=626&ext=jpg&ga=GA1.1.713883325.1682971806&semt=ais"
            alt="userLogo" />
          </div>
        </div>
          
    </div>
  )
}

export default Header
