import React from 'react'
import {logoDark} from '../assets/index'

const Header = () => {
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800">
          <div>
              <img className ="w-28" src={ logoDark } alt="cartly dark" />
          </div>
          <div></div>
    </div>
  )
}

export default Header
