import React from 'react';

const Newsvideo = () => {
  return (
    <div>
         <iframe width="1280px" height="450px" src="https://www.youtube.com/embed/sr2Ry9JVDtU?autoplay=1&mute=0&controls=0&rel=0" 
                 title="YouTube video player" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 referrerPolicy="strict-origin-when-cross-origin"   
                 className="relative w-full h-[400px] sm:h-[600px] md:h-[400px]"
                 allowFullScreen>
        </iframe>
    </div>
  );
};

export default Newsvideo;