import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import todoReducer from './todoslice'

export const store = configureStore({
    reducer:{
        todos:todoReducer
    }
})