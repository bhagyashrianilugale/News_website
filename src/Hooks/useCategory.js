import { useDispatch } from "react-redux";
import {  addNewsData, addErrorMessage, setNewsItem } from "../utils/newsSlice";
import { useEffect } from "react";

const useCategory = ( category )=>{

    const dispatch = useDispatch();

    const getNewsData = async()=>{
        try{
            // Data fetching from news api
            const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${ category }&apiKey=c53fa724ef9b4e55a2013db1ffb7551b`);
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