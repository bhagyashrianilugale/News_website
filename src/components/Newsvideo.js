import React from 'react'
import YouTube from 'react-youtube'
import { youTubeOpts } from '../utils/constant'

const Newsvideo = () => {
  return (
    <div>
      <div className='h-0 pb-0 mt-[100%] sm:mt-[70%] md:mt-[35%]'>
               <YouTube
                  videoId='PqiW4jy0qPU'
                  opts={{
                    ...youTubeOpts,
                    width: '100%',
                    height: '100%',
                  }}
                  className='absolute top-0 left-0 w-full h-[80%]'
                />
          </div>
  </div>
  )
}

export default Newsvideo
