import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useCategory from '../Hooks/useCategory';
import { addCategory } from '../utils/newsSlice';
import { Link } from 'react-router-dom';

const Category = () => {
  const dispatch = useDispatch(); 
  const { category }= useSelector((store)=>store.news); 
  const [ activeCategory, setActiveCategory ] = useState(""); // Set default active category
  
  
  useCategory( category ); // Custom hook to handle category logic

  const handleCategory = async(e)=>{
            const selectCategory = await e.target.getAttribute('data-category');

            if( selectCategory ){
                        // Update active category using state
                        setActiveCategory( selectCategory );
                        dispatch( addCategory( selectCategory ));
            }
  }

  return (
    <div>
        <div className='bg-black h-10 w-full mt-20 cursor-pointer fixed z-10 top-0 overflow-x-scroll no-scrollbar md:overflow-hidden'>
            <ul 
                className='flex w-full text-sm sm:text-lg'
                id="category" 
                onClick={ handleCategory }>
                <Link to='/'>
                <li 
                 className={'h-10 w-20 mx-10 px-4 py-2 bg-yellow-400'}>
                      HOME
                </li>
                </Link>
                <li 
                 className={`py-2 px-1 sm:px-3 ${ activeCategory === 'politics'? 'bg-yellow-400': 'text-white'}`}
                 data-category="politics">
                      POLITICS
                </li>
                <li 
                className={`py-2 px-1 sm:px-3 ${ activeCategory === 'technology'? 'bg-yellow-400': 'text-white'}`}
                data-category="technology">
                      INNOVATIONS
                </li>
                <li  
                className={`py-2 px-1 sm:px-3 ${ activeCategory === 'entertainment'? 'bg-yellow-400': 'text-white'}`}
                data-category="entertainment">
                      ENTERTAINMENT
                </li>
                <li 
                className={`py-2 px-1 sm:px-3 ${ activeCategory === 'world'? 'bg-yellow-400': 'text-white'}`}
                data-category="world">
                    WORLDAFFAIRS
                </li>
                <li 
                className={`py-2 px-1 sm:px-3 ${ activeCategory === 'sports'? 'bg-yellow-400': 'text-white'}`}
                data-category="sports">
                      SPORTS
                </li>
                <li 
                className={`py-2 px-1 sm:px-3 ${ activeCategory === 'business'? 'bg-yellow-400': 'text-white'}`}
                data-category="business">
                     BUSSINESS
                </li>
                <li 
                className={`py-2 px-1 sm:px-3 ${ activeCategory === 'science'? 'bg-yellow-400': 'text-white'}`}
                data-category="science">
                     DISCOVERIESE
                </li>
                <li 
                className={`py-2 px-1 sm:px-3 ${ activeCategory === 'health'? 'bg-yellow-400': 'text-white'}`}
                data-category="health">
                     HEALTH
                </li>
                <li 
                className={`py-2 px-1 sm:px-3 ${ activeCategory === 'finance'? 'bg-yellow-400': 'text-white'}`}
                data-category="finance">
                   FINANCIAL
                </li>
            </ul>
        </div>
      
    </div>
  )
}

export default Category;
