import React from 'react'

const Newsvideo = () => {
  return (
    <div>
       <div>
          <iframe width="560" height="315" 
               src="https://www.youtube.com/embed/y5OdL693Q-c?si=&controls=0&hd=1&showinfo=0&autoplay=1&mute=0&loop=1" 
               title="YouTube video player"
               className='top-[60%] sm:top-[40%]' 
               allow="autoplay" 
               referrerPolicy="strict-origin-when-cross-origin" 
               allowFullScreen>
           </iframe>
      </div>
  </div>
  )
}

export default Newsvideo
