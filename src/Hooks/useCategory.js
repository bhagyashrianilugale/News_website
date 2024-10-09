import { useDispatch } from "react-redux";
import {  addNewsDataCategory, toggleSetError } from "../utils/newsSlice";
import { useEffect } from "react";
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const useCategory = ( category )=>{

    const dispatch = useDispatch();

    const getNewsData = async()=>{
        try{
            // Data fetching from news api
            const response = await fetch(`https://newsapi.org/v2/top-headlines?q=${ category }&apiKey=cc264e1546e54fa79051b9c0822ce8b5`);
            const jsonData = await response?.json();
            console.log(jsonData);
           
          //Update newsDataSlice

           dispatch(addNewsDataCategory( jsonData.articles ));
        }catch(err){
            dispatch(toggleSetError());
        }
            
    }
    
    useEffect(()=>{
       category && getNewsData();
    },[ category ]);
};

export default useCategory;