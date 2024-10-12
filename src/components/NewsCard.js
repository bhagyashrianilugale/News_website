import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Empty_news_holder from '../assets/Empty_news_holder.jpg';
import { useSelector } from 'react-redux';

const NewsCard = ({ newsData }) => {

  const { newsItem } = useSelector((store)=> store?.news);

  const formattedDate = (date)=>{
    return new Date(date)?.toLocaleDateString('en-IN', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
    });
  };
  return (
    <div className='max-w-screen-xl mx-auto sm:p-4'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2'>
        <div className="grid grid-cols-1 gap-2 sm:gap-4">
          { newsData?.slice(0, ( newsItem == 5 ? newsItem-2 : newsItem-4 ))?.map(({ description, title,  publishedAt, source, urlToImage, url }, index ) => (
            <div key={ index } className="relative bg-gradient-to-t from-black h-[400px] sm:h-full">
              <img
                src={urlToImage || Empty_news_holder}
                alt="news_img"
                className="w-full h-full sm:object-cover enhanced-image"
              />
              <div className="absolute bottom-4 left-4 text-white w-[80%]">
              <span className='h-10 w-40 text-sm md:text-xl py-1 px-4 text-center font-bold bg-yellow-400 text-black'>
                  { source?.name || "Unknown Source" }
              </span> 
              <span className='text-lg sm:text-xl font-bold  sm:mx-4 block sm:inline'>
                   { formattedDate( publishedAt )  || "No Date Available" }
              </span>
                <h1 className='text-md mt-4 md:text-2xl font-bold truncate'>
                  { title || "No heading available at the movemet!" }
                </h1>
                <p className='text-sm md:text-lg h-10 md:h-20 font-thin line-clamp-1 
                             text-white hover:h-20 ease-in duration-300 cursor-pointer'>
                       { description?.length? description : null }
                </p>
                <span className='py-2 sm:py-4 block cursor-pointer text-right text-sm text-yellow-400'>
                                   <Link to={ url } className='hover:underline'>
                                      READ MORE <IoIosArrowRoundForward className='inline text-xl mb-1'/>
                                   </Link>
                  </span>
              </div>
            </div>
          ))}
        </div>
        

        {/* Two More Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {newsData?.slice(( newsItem == 5 ? newsItem-2 : newsItem-4 ), newsItem)?.map(({ description, title, publishedAt, source, urlToImage, url }, index) => (
            <div key={index} className="relative bg-gradient-to-t from-black h-[400px] sm:h-full">
              <img
                src={ urlToImage || Empty_news_holder }
                alt="news_img"
                className="w-full h-full sm:object-cover enhanced-image"
              />
              <div className="absolute bottom-4 left-4 text-white w-[80%]">
                <span className='h-10 w-40 text-sm md:text-xl py-1 px-4 text-center font-bold bg-yellow-400 text-black from-black'>
                    { source?.name || "Unknown Source" }
                </span>
                <span className='text-lg sm:text-xl font-bold block my-2'>
                                 { formattedDate( publishedAt )  || "No Date Available" }
                </span>
                <h1 className='text-md mt-4 md:text-2xl font-bold truncate'>
                  { title || "No heading available at the movemet!" }
                </h1>
                <p className='text-sm md:text-lg h-10 md:h-20 font-thin line-clamp-1 
                            text-white hover:h-20 ease-in duration-300 
                            cursor-pointer'>
                            { description?.length? description : null }
                </p>
                <span className='py-2 sm:py-4 block cursor-pointer text-right text-sm text-yellow-400'>
                                   <Link to={ url } className='hover:underline'>
                                      READ MORE <IoIosArrowRoundForward className='inline text-xl mb-1'/>
                                   </Link>
                </span>
              </div>
            </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;