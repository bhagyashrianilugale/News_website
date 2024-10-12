import React from 'react';

const Newsvideo = () => {
  return (
    <div className='relative h-0 overflow-hidden pb-[56.25%]'>
         <iframe width="1380px" height="450px" src="https://www.youtube.com/embed/sr2Ry9JVDtU?autoplay=1&mute=0&controls=0&rel=0" 
                 title="YouTube video player" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                 referrerPolicy="strict-origin-when-cross-origin"   
                 className="absolute top-0 w-[100%] h-[100%]"
                 allowFullScreen>
        </iframe>
    </div>
  );
};

export default Newsvideo;