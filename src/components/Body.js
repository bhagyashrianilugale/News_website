import React from 'react'
import NewsList from './NewsList';
import Category from './Category';

const Body = () => {

  return (
    <>
     <div className='w-screen h-screen'>
       <Category/>
       <NewsList/>
     </div>
    </>
  )
}

export default Body;
