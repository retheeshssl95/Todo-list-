import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoslice';
import authReducer from './authSlice';

var store = configureStore({
    reducer:{
        todos: todoReducer,
        auth: authReducer
    }
})

export default store;