import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { useDispatch, useSelector } from 'react-redux'
import { Bars } from 'react-loading-icons'
import { toggleLoading, toggleSetError } from '../utils/newsSlice'
import { setNewsItem } from '../utils/newsSlice'

const NewsList = () => {

  const { newsDataCategory, showLoading }= useSelector((store)=>store?.news);// Subscribe store using useSelector
  const dispatch = useDispatch();
  const[ newsData, setnewsData ] = useState(null);
    
    const getNewsData = async()=>{
            try{
              const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=26f65aca723d4fd6aa1e25fbbc4a815e`);
              const jsonData = await response?.json();
              console.log(jsonData);
              const result = await Promise.all(jsonData?.articles)
               .then((result)=>{
                   setnewsData(result);
                   dispatch( toggleLoading() );
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


  return showLoading 
         ? (<Bars className="mx-auto mt-40"/>)
         :(
     <> 
        <div className="bg-gray-200 py-2 px-[2%]">
             { newsDataCategory?.length ? <NewsCard props={ newsDataCategory } /> : <NewsCard props={ newsData } />  }
             <button 
                    onClick={ handleNewsItem }
                    className="bg-blue-400 text-white py-2 px-4 mx-[30%] sm:mx-[40%] md:mx-[45%] my-[2%] rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
                      Load More
             </button>
        </div>
    </>
  );
}

export default NewsList;
