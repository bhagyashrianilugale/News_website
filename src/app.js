import React from 'react'
import Header from './components/Header'
import reactDom from 'react-dom'
import { RouterProvider, createBrowserRouter  } from 'react-router-dom'

const Error = ()=>{
    return <div>Something went wrong, or the page does not exist.</div>
}

const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Header/>,
      errorElement: <Error/>
    }
    ]);


const root = reactDom.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);