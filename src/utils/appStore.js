import { configureStore } from "@reduxjs/toolkit";
import  newsReducer from './newsSlice';

// Create a Redux store using configureStore
const appStore = configureStore(
    {
        reducer:{
            news: newsReducer,
        }
    }
);


export default appStore;