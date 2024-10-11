import React from "react";
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider, useSelector } from 'react-redux'
import Body from './components/Body'
import appStore from './utils/appStore'
import Error from './components/Error'


const App = ()=>{
  // Subscribe to the store 
  const {  setErrorMessage } = useSelector((store)=> store?.news);
  return (
      <> 
          { setErrorMessage?.length 
            ? <Error/> 
            : <div>
                 <Header/>
                 <Body/>
              </div>
          }
    </>
   )
};

const router = createBrowserRouter([
   {
    path:'/',
    element: <App/>,
    errorElement: <Error/>
   },
   {
      path: "*",
      element: <Error/>
   }
]);
  
  

// Creating the root element for React to render the app
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the RouterProvider with the defined router
root.render(<Provider store={ appStore }>
                  <RouterProvider router={ router }/>
            </Provider>);