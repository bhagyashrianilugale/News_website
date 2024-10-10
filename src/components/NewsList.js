import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { useDispatch, useSelector } from 'react-redux'
import { Bars } from 'react-loading-icons'
import { toggleSetError } from '../utils/newsSlice'
import { setNewsItem } from '../utils/newsSlice'
import Newsvideo from './Newsvideo'

const NewsList = () => {

  const { newsDataCategory, newsItem }= useSelector((store)=>store?.news);// Subscribe store using useSelector
  const dispatch = useDispatch();
  const[ newsData, setnewsData ] = useState(null);
    
    const getNewsData = async()=>{
            try{
              const response = await fetch(`https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fnewsapi.org%2Fv2%2Ftop-headlines%3Fcountry%3Dus%26apiKey%3D554becea9d744b94b474a0163e763a95`);
              const jsonData = await response?.json();
              console.log(jsonData);
              const result = await Promise.all(jsonData?.articles)
               .then((result)=>{
                   setnewsData(result);
              })
            }catch(err){
              console.log(err);
              dispatch(toggleSetError());
        }
    }

    const handleNewsItem = ()=>{
              dispatch(setNewsItem(  newsData?.length-1 || newsDataCategory?.length-1 ))
    }

    useEffect(()=>{
        getNewsData();
        dispatch(setNewsItem("5"));
    }, []);


  return ( newsDataCategory?.length || newsData?.length ) ? (<>
          
          <div className="mt-[8%] w-full bg-yellow-200">
            <Newsvideo/> 
            <div className='md:flex md:flex-wrap'>
             { (newsDataCategory || newsData).slice(0, newsItem)?.map(({ description, title, publishedAt, source, urlToImage, url }, index )=>{
                    const formattedDate = new Date( publishedAt ).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric'});
                    return (
                    <div key = { index } className="w-full sm:w-1/2 md:2/3">
                         <NewsCard 
                                 description = { description } 
                                 title = {title}  
                                 formattedDate = {formattedDate} 
                                 source = { source } 
                                 urlToImage = {urlToImage} 
                                 url = {url}  
                                 />

                    </div>)})
            }
                </div>
            </div>
            {
             ( newsDataCategory?.length > 6 
               ||  newsData?.length > 6 )
               && <button 
                     onClick={ handleNewsItem }
                     className="bg-yellow-400 text-white py-2 px-4 mx-[30%] sm:mx-[40%] md:mx-[45%] my-[2%] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                      View More
          </button>
        }
    </>
  ) : <Bars className="mx-auto mt-[9%] flex items-center"/> ;
 
}

export default NewsList;
