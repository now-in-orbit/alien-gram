import posts from "./postSlice"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({posts})

export const store = configureStore({reducer})
