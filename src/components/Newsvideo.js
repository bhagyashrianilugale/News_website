import React from 'react'

const Newsvideo = () => {
  return (
    <div className='top-[40%]'>
       <div>
           <iframe 
                   className="aspect-video overflow-hidden left-0" 
                   src="https://www.youtube.com/embed/sYZtOFzM78M?si=ROZRSubHtoyFHMeG?si=&autoplay=1&controls=1&hd=1&showinfo=0&modestbranding=1&rel=0" 
                   title="YouTube video player" frameborder="0" 
                   referrerPolicy="strict-origin-when-cross-origin"
                   allowFullScreen>
           </iframe>
      </div>
  </div>
  )
}

export default Newsvideo
