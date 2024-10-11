import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import { useDispatch, useSelector } from 'react-redux'
import { Bars } from 'react-loading-icons'
import { setNewsItem, addErrorMessage, addNewsData} from '../utils/newsSlice'
import Newsvideo from './Newsvideo'

const NewsList = () => {

  const { newsData, newsItem }= useSelector((store)=>store?.news); // Subscribe store using useSelector
  const dispatch = useDispatch();
  const [ loading, setLoading ] = useState(true);
  const props = ( newsData )?.slice(0, newsItem );
    // Fetch news data from API
    const getNewsData = async()=>{
            try{
              const response = await fetch(
                  `https://newsapi.org/v2/top-headlines?country=us&apiKey=6892ffea96094ee9a988690b7f19a020`
                );
              const jsonData = await response?.json();
              const newsData = await jsonData?.articles;
              console.log(newsData);
              dispatch(addNewsData( newsData ));
              setLoading(false); // Set loading to false once date is fetched
             } catch(err){
              dispatch( addErrorMessage(err.message)); // Dispatch error message in failure state
              setLoading(false);
        }
    }

    const handleNewsItem = ()=>{
              dispatch(setNewsItem(  newsData?.length-1 ))
    }
    
    useEffect(()=>{
        getNewsData();
    }, []);


  return loading ? (<Bars 
                      className="mx-auto mt:[14%] sm:mt-[9%] flex justify-center items-center"
                      height="200px"
                      width="200px"
                      fill="black"
                     /> ) 
                 : 
    (<> <div className="mt-[10%] h-full w-full">
              <Newsvideo/>
              <div className="mt-[480px] sm:mt-0">
                  <NewsCard  newsData = { props }/>
              </div>
             
              {(( newsData?.length > 4 ))
                  ? <button 
                      onClick={ handleNewsItem }
                      className="bg-yellow-400 text-white py-2 px-4 mx-[30%] 
                                   sm:mx-[40%] md:mx-[45%] my-[2%] hover:bg-yellow-500 
                                   focus:outline-none focus:ring-2 focus:ring-yellow-400">
                       View More
                      </button>
                   : null
             }
        </div>
    </>
  );
 
}

export default NewsList;
