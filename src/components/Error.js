import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Error = () => {
  const { setErrorMessage } = useSelector((store)=> store.news );
  return (
    <>
        { setErrorMessage?.length 
            ? <div className="text-red-900 text-2xl flex font-bold justify-center item-center">
                  { setErrorMessage } Please refresh your page
              </div> 
            : <div className="m-auro justify-around p-4">
               <img
               className="border-none h-[40%]  w-[80%] sm:h-[60%] sm:w-[40%] m-auto"
               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZP33k8-h2lGoGhsxS1WRTcHoTIPawLKxyQ&s"
               alt="error_img"/>
               <div className="m-auto w-full sm:w-4/12">  
                       <h1 className="font-bold text-center">OH NO!</h1>
                        <p className="text-orange font-bold text-center">
                             Something wents wrong
                        </p>
                        <p className="text-2xl font-bold my-2 text-center">
                            404 : Page Not Found
                        </p>
                        <Link to='/'>
                             <button className='p-2 block w-25 rounded-sm font-semibold text-center bg-yellow-500 text-white my-2 mx-auto'>
                                  Go to homepage
                            </button>
                        </Link>
                 </div>
             </div>
         }
    </>
  )
}

export default Error;
