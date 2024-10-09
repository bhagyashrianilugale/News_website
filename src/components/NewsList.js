import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const NewsList = () => {

    const[ newsData, setnewsData ] = useState(null);
  
    const getNewsData = async()=>{

            // Data fetching from news api
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${ API_KEY }`);
            const jsonData = await response?.json();
            setnewsData(jsonData.articles);
           
    }

    useEffect(()=>{
        getNewsData();
    }, []);

  return (
     <> 
        <div className="bg-gray-200 py-2 px-[2%]">
           <NewsCard props={ newsData }/>   
       </div>
    </>
  )
}

export default NewsList
