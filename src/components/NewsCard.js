import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Empty_img_holder } from '../utils/constant'


const NewsCard = ({description,title, formattedDate, source,urlToImage, url }) => {
 
  return <div className='w-[100%] h-[60%]'>
            <div className="relative"> 
                        <img src={ urlToImage ? urlToImage : Empty_img_holder } className="w-80 sm:w-[50%] h-[100%] enhanced-image"/>
                        <div className='px-4 sm:px-4 bg-gradient-to-t from-black w-[50%] text-white bottom-0 absolute'>
                              <span className='h-10 w-40 text-xl py-1 px-4 text-center font-bold truncate bg-yellow-400 text-black'>{ source?.name }</span> 
                              <span className='text-xl font-thin  mx-4'>{ formattedDate }</span>
                              <h1 className='text-2xl font-bold text-white'>{ title ? title: "No heading available at the movemet!" }</h1>
                                 <p className='text-lg h-8 font-thin line-clamp-1 hover:h-20 ease-in duration-300 cursor-pointer'>{ description?.length? description : "" }</p>
                              <span className='py-4 block cursor-pointer text-right text-sm text-gray-400'>
                                   <Link to={url} className='hover:underline'>
                                      READ MORE <IoIosArrowRoundForward className='inline text-xl mb-1'/>
                                   </Link>
                              </span>
                  </div>
            </div>
        </div>
  }

export default NewsCard;
