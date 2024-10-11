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
  console.log(newsData);

    // Fetch news data from API
    const getNewsData = async()=>{
            try{
              const response = await fetch(
                  `https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fnewsapi.org%2Fv2%2Ftop-headlines%3Fcountry%3Dus%26apiKey%3Dc53fa724ef9b4e55a2013db1ffb7551b`
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
    
    const formattedDate = (date)=>{
      return new Date(date).toLocaleDateString('en-IN', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
      });
    };

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
    (<> <div className="mt-[10%] w-full h-full">
              <Newsvideo/> 
                <div className='md:flex md:flex-wrap'>
                        { ( newsData )?.slice(0, newsItem )?.map(({ description, title, publishedAt, source, urlToImage, url }, index )=>{
                         return (
                      <div key = { index } className="w-full h-11/12 sm:w-1/2">
                         <NewsCard 
                                 description = { description } 
                                 title = { title }  
                                 formattedDate = {formattedDate(publishedAt)} 
                                 source = { source } 
                                 urlToImage = { urlToImage } 
                                 url = { url }  
                                 />

                        </div>)})
                        }
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
