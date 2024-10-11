import { createSlice } from "@reduxjs/toolkit";

const newsSlice = createSlice({
    name:"news",
    initialState: {
          category: null,
          newsData: null,
          setErrorMessage: null,
          newsItem : 5
    },
    reducers: {

       addCategory : (state, action)=>{
            state.category = action.payload;
        },
        
       addNewsData: ( state, action)=>{
            state.newsData = action.payload;
       },
       
       addErrorMessage : ( state, action )=>{
            state.setErrorMessage = action.payload;
       },
      
       setNewsItem: (state, action)=>{
            state.newsItem = action.payload;
       }
     
    },
});

export const { addCategory, addNewsData,  addErrorMessage, setNewsItem  } = newsSlice.actions;
export default newsSlice.reducer;