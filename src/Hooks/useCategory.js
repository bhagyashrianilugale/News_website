import { useDispatch } from "react-redux";
import {  addNewsData, addErrorMessage, setNewsItem } from "../utils/newsSlice";
import { useEffect } from "react";

const useCategory = ( category )=>{

    const dispatch = useDispatch();

    const getNewsData = async()=>{
        try{
            // Data fetching from news api
            const response = await fetch(`https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fnewsapi.org%2Fv2%2Feverything%3Fq%3D${ category }%26apiKey%3D11790d2f312543c1a6f2853dae4c37c8`);
            const jsonData = await response?.json();
            jsonData.message ? dispatch( addErrorMessage(err.message) ) : null;  // Dispatch error message in failure state
           
          //Update newsDataSlice
           dispatch(addNewsData( jsonData.articles ));
        }catch(err){
            console.log(err)
        }
}
    
    useEffect(()=>{
       category && getNewsData();
       dispatch(setNewsItem(5)); 
    },[ category ]);
};

export default useCategory;