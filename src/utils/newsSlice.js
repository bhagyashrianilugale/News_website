import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name:"news",
    initialState: {
          category: null,
          newsDataCategory: null,
          setError: false,
          newsItem : "5"
    },
    reducers: {

       addCategory : (state, action)=>{
            state.category = action.payload;
        },
        
       addNewsDataCategory: ( state, action)=>{
            state.newsDataCategory = action.payload;
       },
       
       toggleSetError : ( state )=>{
            state.setError = !state.setError;
       },
      
       setNewsItem: (state, action)=>{
            state. newsItem = action.payload;
       }
     
    },
});

export const { addCategory, addSearchKeyword, showLoading, addNewsSearchKeyword, addNewsDataCategory,  toggleSetError, toggleLoading, setNewsItem  } = newsSlice.actions;
export default newsSlice.reducer;