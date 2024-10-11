import { createSlice } from "@reduxjs/toolkit";


// Creating the 'news' slice
const newsSlice = createSlice({
    name:"news",
    initialState: {
          category: null,
          newsData: null,
          setErrorMessage: null,
          newsItem : 1
    },
    reducers: {

       // Reducer to update category
       addCategory : (state, action)=>{
            state.category = action.payload;
        },
        
       // Reducer to update the news data 
       addNewsData: ( state, action)=>{
            state.newsData = action.payload;
       },
       
       // Reducer to update the error message
       addErrorMessage : ( state, action )=>{
            state.setErrorMessage = action.payload;
       },
      
       // Reducer to update the number of news items
       setNewsItem: (state, action)=>{
            state.newsItem = action.payload;
       }
     
    },
});

export const { addCategory, addNewsData,  addErrorMessage, setNewsItem  } = newsSlice.actions;
export default newsSlice.reducer;