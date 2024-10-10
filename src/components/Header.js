import React from 'react'
import Logo from '../assets/Logo.jpg'


const Header = () => {
  return (
    <>
      <div>
          <div className='h-20 w-screen border-b-2 border-black flex justify-center items-center shadow-lg fixed top-0 left-0 z-20 bg-white'>
                    <img src={ Logo } className='h-40 w-45 mx-4 my-2 block enhanced-image'/>
          </div>
      </div>
    </>
  )
}

export default Header;
