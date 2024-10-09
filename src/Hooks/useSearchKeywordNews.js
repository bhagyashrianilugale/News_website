import { useDispatch } from "react-redux";
import { addSearchKeyword } from "../utils/newsSlice";
import { useEffect } from "react";
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;


const useSearchKeywordNews = ( searchKeyword )=>{

    const dispatch = useDispatch();

    const getNewsData = async()=>{
        try{
            // Data fetching from news api
            const response = await fetch(`https://newsapi.org/v2/everything?q=technology&from=${ year }-01-01&to=${ year }-12-31&apiKey=${ API_KEY }`);
            const jsonData = await response?.json();
            
          //Update newsDataSlice
           dispatch( addSearchKeyword( jsonData.articles ));
        }catch(err){
            console.log(err);
        }
            
    }
    
    useEffect(()=>{
        searchKeyword && getNewsData();
    },[ searchKeyword ]);
};

export default useSearchKeywordNews;