import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard';
import { useDispatch, useSelector } from 'react-redux';
import { Bars } from 'react-loading-icons'
import { toggleLoading, toggleSetError } from '../utils/newsSlice';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const NewsList = () => {

    const[ newsData, setnewsData ] = useState(null);
    const { newsDataCategory, showLoading }= useSelector((store)=>store?.news);
    const dispatch = useDispatch();
      console.log(showLoading);
    const getNewsData = async()=>{
            try{
              const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${ API_KEY }`);
              const jsonData = await response?.json();
              const result = await Promise.all(jsonData?.articles)
               .then((result)=>{
                   setnewsData(result);
                   dispatch( toggleLoading() );
              })
              // console.log(result);
            }catch(err){
              dispatch(toggleSetError());
            }
           
           
    }

    useEffect(()=>{
        getNewsData();
    }, []);

  // if(showLoading) return ( <Bars className="mx-auto mt-40"/> );

  return showLoading 
         ? (<Bars className="mx-auto mt-40"/>)
         :(
     <> 
        <div className="bg-gray-200 py-2 px-[2%]">

            { newsDataCategory?.length ? <NewsCard props={ newsDataCategory }/> : <NewsCard props={ newsData }/>  }
        </div>
    </>
  );
}

export default NewsList;
