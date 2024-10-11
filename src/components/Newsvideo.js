import React from 'react'
import YouTube from 'react-youtube'
import { youTubeOpts } from '../utils/constant'

const Newsvideo = () => {
  // Newsvideo component for live news fetch from You tube
  return (
    <div>
      <div className='h-0 pb-0 sm:mt-[70%] md:mt-[45%]'>
               <YouTube
                  videoId='sr2Ry9JVDtU'
                  opts={{
                    ...youTubeOpts,
                    width: '100%',
                    height: '100%',
                   }}
                  className='absolute top-0 w-[100%] sm:w-[95%] md:w-[1240px] h-[80%] mt-[14%] sm:mt-[10%] md:mt-[8%]'
                />
          </div>
  </div>
  )
}

export default Newsvideo
