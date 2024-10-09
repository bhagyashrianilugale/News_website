import React from 'react'
import NewsList from './NewsList';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, addSearchKeyword } from '../utils/newsSlice'
import useCategory from '../Hooks/useCategory';
import useSearchKeywordNews from '../Hooks/useSearchKeywordNews';

const Body = () => {
  const dispatch = useDispatch(); // Initialize Dispatch
  const { category, searchKeyword }= useSelector((store)=>store.news);

  useCategory( category );
  useSearchKeywordNews( searchKeyword );
  

  const handleCategory = async(e)=>{
      let category =  await e.target.value;
      dispatch( addCategory( category ));
  }

  const handleSearchKeyword = async(e)=>{
      let keyword =  await e.target.value;
      dispatch( addSearchKeyword( keyword ));
  }
  return (
    <>
        <div className='h-40 w-full bg-blue-950'>
              <select onChange={ handleCategory }>
                     <option value="">Category 1</option>
                     <option value="politics">Latest in Politics</option>
                     <option value="technology">Tech Innovations</option>
                     <option value="entertainment">Trending Entertainment</option>
                </select>

                <select onChange={ handleCategory }>
                     <option value="">Category 2</option>
                     <option value="sports">Sports Highlights</option>
                     <option value="business">Business & Finance</option>
                     <option value="science">Discoveries in science</option>
                </select>

                <select onChange={ handleCategory }>
                     <option value="">Category 3</option>
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
