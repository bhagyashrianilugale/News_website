import React from 'react'
import logo from '../assets/logo.jpg'


const Header = () => {
  return (
    <>
    <div>
          <div className='h-30 w-screen border-b-2 border-black flex justify-center items-center'>
            <img src={logo} className='h-30 w-40 mx-4 my-2 block enhanced-image'/>
          </div>
      </div>
    </>
  )
}

export default Header;
