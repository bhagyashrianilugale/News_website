import React from 'react'

const Header = () => {
  return (
    <>
      <div>
          <div className='h-20 w-screen border-black flex shadow-lg fixed top-0 left-0 z-20 bg-white'>
              <h1 className="text-black font-thin text-6xl px-10 py-2 mx-auto sm:mx-0">
              <span 
              className='font-semibold text-yellow-400'>LIVE</span>NEWS</h1>
          </div>
      </div>
    </>
  )
}

export default Header;
