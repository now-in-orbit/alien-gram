import profiles from "./profileSlice"
import posts from "./postSlice"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({posts, profiles})

export const store = configureStore({reducer})

