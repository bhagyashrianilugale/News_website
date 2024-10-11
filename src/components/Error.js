import React from 'react'
import { useSelector } from 'react-redux';

const Error = () => {
  const { setErrorMessage } = useSelector((store)=> store?.news);
  console.log(setErrorMessage);
  return (
    <div>
      <h1>Error found</h1>
    </div>
  )
}

export default Error;
