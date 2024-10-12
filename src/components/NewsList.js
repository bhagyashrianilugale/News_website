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
                  `https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fnewsapi.org%2Fv2%2Ftop-headlines%3Fcountry%3Dus%26apiKey%3D11790d2f312543c1a6f2853dae4c37c8`
                );
              const jsonData = await response?.json();
              const newsData = await jsonData?.articles;
              console.log(response);
              dispatch(addNewsData( newsData ));
              setLoading(false); // Set loading to false once date is fetched
             } catch(err){
              dispatch( addErrorMessage(err.message)); // Dispatch error message in failure state
              setLoading(false);
        }
    }

    const handleNewsItem = ()=>{
              const item =  newsItem == 5 ? 4 : 5;
              dispatch(setNewsItem( newsItem + item ))
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
    (<> <div className="mt-[34%] sm:mt-[18%] md:mt-[4%] h-full w-full">
              <Newsvideo/>
              <div className="mt-0">
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
