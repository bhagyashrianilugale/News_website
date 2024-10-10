import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { useDispatch, useSelector } from 'react-redux'
import { Bars } from 'react-loading-icons'
import { toggleSetError } from '../utils/newsSlice'
import { setNewsItem } from '../utils/newsSlice'

const NewsList = () => {

  const { newsDataCategory, newsItem }= useSelector((store)=>store?.news);// Subscribe store using useSelector
  const dispatch = useDispatch();
  const[ newsData, setnewsData ] = useState(null);
    
    const getNewsData = async()=>{
            try{
              const response = await fetch(`https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fnewsapi.org%2Fv2%2Ftop-headlines%3Fcountry%3Dus%26apiKey%3D6311b505d27b451b88a1bc3a4313c394`);
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
        <div className="bg-white flex flex-wrap w-[100%] mt-20">
           { (newsDataCategory || newsData).slice(0, newsItem)?.map(({ description, title, publishedAt, source, urlToImage, url }, index )=>{
                    const formattedDate = new Date( publishedAt ).toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric'});
                    return <NewsCard 
                                 description = { description } 
                                 title = {title}  
                                 formattedDate = {formattedDate} 
                                 source = { source } 
                                 urlToImage = {urlToImage} 
                                 url = {url}  
                                 key = { index }/>
                }) 
              }{
             ( newsDataCategory?.length > 5 
               ||  newsData?.length > 5 )
               && <button 
                     onClick={ handleNewsItem }
                     className="bg-yellow-400 text-white py-2 px-4 mx-[30%] sm:mx-[40%] md:mx-[45%] my-[2%] hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-400">
                      View More
                 </button>}
        </div>
    </>
  ): <Bars className="mx-auto mt-[9%] flex items-center"/> ;
 
}

export default NewsList;
