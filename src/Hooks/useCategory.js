import { useDispatch } from "react-redux";
import {  addNewsDataCategory, toggleSetError } from "../utils/newsSlice";
import { useEffect } from "react";
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const useCategory = ( category )=>{

    const dispatch = useDispatch();

    const getNewsData = async()=>{
        try{
            // Data fetching from news api
            const response = await fetch(`https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fnewsapi.org%2Fv2%2Ftop-headlines%3Fq%3D${ category }%26apiKey%3Df07c1f77e1ff4ffb827785f07e09c8c0`);
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