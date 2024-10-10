import React from 'react'
import NewsList from './NewsList';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, addSearchKeyword } from '../utils/newsSlice'
import useCategory from '../Hooks/useCategory';

const Body = () => {

  const dispatch = useDispatch(); // Initialize Dispatch
  const { category, searchKeyword }= useSelector((store)=>store.news); // Subscribe store using useSelector


  useCategory( category ); // Calling custom hook
  
 const handleCategory = async(e)=>{
        let category =  await e.target.value;
        // Dispatch action to add category on store
        dispatch( addCategory( category ));
  }

  return (
    <>
      <div className='h-50 w-full bg-blue-950 flex flex-col space-y-4 p-4 mt-[25%] sm:mt-[14%] md:mt-[6%]'>
                  <h1 className='text-center text-white font-semibold'>Explore news that matters to you<br/>
                      Choose a category to explore top stories</h1>
              <select onChange={ handleCategory } className="sm:p-2 w-full md:w-1/2 md:mx-[25%] border rounded bg-blue-100 text-blue-900 focus: outline-none focus:ring-2 focus:ring-blue-400">
                     <option value="">Latest in Politics, Tech Innovations, Trending Entertainment</option>
                     <option value="politics">Latest in Politics</option>
                     <option value="technology">Tech Innovations</option>
                     <option value="entertainment">Trending Entertainment</option>
                </select>

                <select onChange={ handleCategory } className="sm:p-2 w-full md:w-1/2 md:mx-[25%] border rounded bg-blue-100 text-blue-900 focus: outline-none focus:ring-2 focus:ring-blue-400">
                     <option value="">Sports Highlights, Business & Finance, Discoveries in science</option>
                     <option value="sports">Sports Highlights</option>
                     <option value="business">Business & Finance</option>
                     <option value="science">Discoveries in science</option>
                </select>

                <select onChange={ handleCategory } className="sm:p-2 w-full md:w-1/2 md:mx-[25%] border rounded bg-blue-100 text-blue-900 focus: outline-none focus:ring-2 focus:ring-blue-400">
                     <option value="">Health & Wellness, World Affairs, Financial News</option>
                     <option value="health">Health & Wellness</option>
                     <option value="world">World Affairs</option>
                     <option value="finance">Financial News</option>
                </select>
                
        </div>
       <NewsList/>
    </>
  )
}

export default Body;
