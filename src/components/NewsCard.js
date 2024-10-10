import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Empty_img_holder } from '../utils/constant'


const NewsCard = ({description,title, formattedDate, source,urlToImage, url }) =>{

  return <div>
            <div className="relative bg-white">
                        <img src={ urlToImage ? urlToImage : Empty_img_holder } className="enhanced-image w-full h-full"/>
                        <div className='px-4 sm:px-4 bg-gradient-to-t from-black md:w-full bottom-0 absolute'>
                              <span className='h-10 w-40 text-xl py-1 px-4 text-center font-bold truncate bg-yellow-400 text-black'>{ source?.name }</span> 
                              <span className='text-xl font-bold  mx-4 text-white'>{ formattedDate }</span>
                              <h1 className='text-lg sm:text-2xl font-bold text-white'>{ title ? title: "No heading available at the movemet!" }</h1>
                                 <p className='text-xl sm:text-lg h-8 font-thin line-clamp-1 text-zinc-200 hover:h-20 ease-in duration-300 cursor-pointer'>{ description?.length? description : "" }</p>
                              <span className='py-4 block cursor-pointer text-right text-sm text-yellow-400'>
                                   <Link to={url} className='hover:underline'>
                                      READ MORE <IoIosArrowRoundForward className='inline text-xl mb-1'/>
                                   </Link>
                              </span>
                  </div>
            </div>
        </div>
  }
 
export default NewsCard;
