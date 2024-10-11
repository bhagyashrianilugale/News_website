import { useDispatch } from "react-redux";
import {  addNewsData, addErrorMessage, setNewsItem } from "../utils/newsSlice";
import { useEffect } from "react";

const useCategory = ( category )=>{

    const dispatch = useDispatch();

    const getNewsData = async()=>{
        try{
            // Data fetching from news api
            const response = await fetch(`https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fnewsapi.org%2Fv2%2Ftop-headlines%3Fq%3D${ category }%26apiKey%3Dc53fa724ef9b4e55a2013db1ffb7551b`);
            const jsonData = await response?.json();
           
          //Update newsDataSlice

            dispatch(addNewsData( jsonData.articles ));
        }catch(err){
            dispatch( addErrorMessage(err.message));
        }
            
    }
    
    useEffect(()=>{
       category && getNewsData();
       dispatch(setNewsItem(5)); 
    },[ category ]);
};

export default useCategory;