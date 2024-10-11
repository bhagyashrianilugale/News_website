import React from "react";
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Body from './components/Body'
import appStore from './utils/appStore'
import Error from './components/Error'


const App = ()=>{
  return (
      <Provider store={ appStore }>
          <Header/>
          <Body/>
       </Provider>
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
root.render(<RouterProvider router={ router }/>);