import { useDispatch } from "react-redux";
import {  addNewsData, addErrorMessage, setNewsItem } from "../utils/newsSlice";
import { useEffect } from "react";

const useCategory = ( category )=>{

    const dispatch = useDispatch();

    const getNewsData = async()=>{
        try{
            // Data fetching from news api
            const response = await fetch(`https://newsapi.org/v2/everything?q=${ category }&from=2024-09-11&sortBy=publishedAt&apiKey=6892ffea96094ee9a988690b7f19a020`);
            const jsonData = await response?.json();
           
          //Update newsDataSlice
           dispatch(addNewsData( jsonData.articles ));
        }catch(err){
            dispatch( addErrorMessage(err.message)); // Dispatch error message in failure state
        }
            
    }
    
    useEffect(()=>{
       category && getNewsData();
       dispatch(setNewsItem(5)); 
    },[ category ]);
};

export default useCategory;