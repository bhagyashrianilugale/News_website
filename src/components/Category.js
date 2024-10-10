import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import useCategory from '../Hooks/useCategory';
import { addCategory } from '../utils/newsSlice';

const Category = () => {
  const dispatch = useDispatch(); // Initialize Dispatch
  const { category }= useSelector((store)=>store.news); // Subscribe store using useSelector
  const [ previousCategory, setpreviousCategory ] = useState();
  
  
  useCategory( category ); // Calling custom hook
  const handleCategory = async(e)=>{

           const Category = await e.target.getAttribute('data-category');
                                  e.target.setAttribute("class", "bg-yellow-400 py-2 px-3 h-10")
           setpreviousCategory( e.target );
           // Dispatch action to add category on store
           dispatch( addCategory( Category ));
           if( previousCategory ) previousCategory.setAttribute("class", "text-white py-2 px-3")
  }

  return (
    <div>
        <div className='bg-black h-10 w-full mt-20  fixed z-10 top-0 overflow-x-scroll no-scrollbar md:overflow-hidden'>
            <ul className='flex w-full text-md sm:text-lg cursor-pointer'id="category" onClick={ handleCategory }>
                <li className='h-10 w-20 mx-10 px-3 py-2 bg-yellow-400'>HOME</li>
                <li className='text-white py-2 px-1 sm:px-3' data-category="politics">POLITICS</li>
                <li className='text-white py-2 px-1 sm:px-3' data-category="technology">INNOVATIONS</li>
                <li  className='text-white py-2 px-1 sm:px-3' data-category="entertainment">ENTERTAINMENT</li>
                <li className='text-white py-2 px-1 sm:px-3' data-category="sports">SPORTS</li>
                <li className='text-white py-2 px-1 sm:px-3' data-category="business">BUSSINESS</li>
                <li className='text-white py-2 px-1 sm:px-3' data-category="science">DISCOVERIESE</li>
                <li className='text-white py-2 px-1 sm:px-3' data-category="health">HEALTH</li>
                <li className='text-white py-2 px-1 sm:px-3' data-category="world">WORD AFFAIRS</li>
                <li className='text-white py-2 px-1 sm:px-3' data-category="finance">FINANCIAL</li>
            </ul>
        </div>
      
    </div>
  )
}

export default Category;
