import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import { Empty_img_holder } from '../utils/constant'
import { useSelector } from 'react-redux';


const NewsCard = ({ props }) => {
  const { newsItem }= useSelector((store)=>store?.news);
  
  return props?.length && (
       <div className='flex flex-wrap'>
       { props?.slice(0, newsItem )?.map(({description,title,publishedAt,source,urlToImage, url}, index)=>{
        const formattedDate = new Date(publishedAt).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric'});
        return <div className="w-10/12 rounded-sm sm:px-4 py-1 sm:flex my-1 mx-[10%] shadow-xm shadow-black overflow-x-hidden bg-white" key={ index }> 

                       <div className='w-80 relative'>
                           <img src={ urlToImage ? urlToImage : Empty_img_holder } className="w-80 sm:w-80 h-40 my-2"/>
                           <span className='h-4 w-20 bg-orange-200 text-xs truncate absolute top-4 text-center'>{ source?.name }</span>
                       </div>

                       <div className='px-4 sm:px-4'>
                              <span className='text-xs font-thin'>{ formattedDate }</span>
                              <h1 className='text-md font-semibold text-blue-950 leading-6'>{ title?.length ? title: "No heading available at the movemet!" }</h1>
                              <p className='text-xs font-thin'>{ description?.length? description : "" }</p>
                              <span className='py-4 block cursor-pointer text-right text-xs text-gray-600 text-thin'>
                                   <Link to={url} className='hover:underline'>
                                      READ MORE <IoIosArrowRoundForward className='inline text-xl mb-1'/>
                                   </Link>
                              </span>
                      </div>
            </div>
          })} 
    </div>
  );
}

export default NewsCard;
