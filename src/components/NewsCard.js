import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io"
import { Link } from 'react-router-dom'
import Empty_news_holder from '../assets/Empty_news_holder.jpg'


const NewsCard = ({description,title, formattedDate, source,urlToImage, url }) =>{

  return <div>
            <div className="relative bg-white m-2">
                        <img 
                           src={ urlToImage?.length ? urlToImage : Empty_news_holder }
                           alt={ title || "news_image" }
                           className={`enhanced-image w-full h-full`}/>
                        <div className='px-4 bg-gradient-to-t text-black sm:from-black w-full bottom-0 sm:absolute sm:text-white opacity-90 sm:opacity-100'>
                              <span className='h-10 w-40 text-sm md:text-xl py-1 px-4 text-center font-bold bg-yellow-400 text-black'>
                                 { source?.name || "Unknown Source" }</span> 
                              <span className='text-lg sm:text-xl font-bold  sm:mx-4 block sm:inline'>
                                 { formattedDate || "No Date Available" }</span>
                              <h1 className='text-md md:text-2xl font-bold truncate'>
                                 { title || "No heading available at the movemet!" }</h1>
                              <p className='text-sm md:text-lg h-4 sm:h-8 font-semibold sm:font-thin line-clamp-1 text-black sm:text-zinc-200 hover:h-20 ease-in duration-300 cursor-pointer'>
                                    { description?.length? description : null }
                              </p>
                              <span className='py-2 sm:py-4 block cursor-pointer text-right text-sm text-yellow-400'>
                                   <Link to={ url } className='hover:underline'>
                                      READ MORE <IoIosArrowRoundForward className='inline text-xl mb-1'/>
                                   </Link>
                              </span>
                  </div>
            </div>
        </div>
  }
 
export default NewsCard;
