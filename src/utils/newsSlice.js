import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name:"news",
    initialState: {
          category: null,
          searchKeyword: null,
          newsDataCategory: null,
          newsDataSearchKeyword: null,
          setError: false,
          showLoading : true,
          newsItem : "5"
    },
    reducers: {

       addCategory : (state, action)=>{
            state.category = action.payload;
        },
        
       addSearchKeyword : (state, action)=>{
            state.searchKeyword = action.payload;
         },

       addNewsDataCategory: ( state, action)=>{
            state.newsDataCategory = action.payload;
       },
       
       addNewsSearchKeyword : ( state, action)=>{
        state.newsDataSearchKeyword = action.payload;
       },

       toggleSetError : ( state )=>{
            state.setError = !state.setError;
       },
       toggleLoading : (state)=>{
          state.showLoading = !state.showLoading;
       },

       setNewsItem: (state, action)=>{
            state. newsItem = action.payload;
       }
     
    },
});

export const { addCategory, addSearchKeyword, showLoading, addNewsSearchKeyword, addNewsDataCategory,  toggleSetError, toggleLoading, setNewsItem  } = newsSlice.actions;
export default newsSlice.reducer;