import React from "react";
import ReactDOM from 'react-dom/client';
import Header from './components/Header'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Body from './components/Body'
import appStore from './utils/appStore'

const Error = ()=>{
    return <div>Something went wrong, or the page does not exist.</div>
}

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
   }
]);

  
  


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={ router }/>);