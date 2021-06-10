import profiles from "./profileSlice"
import posts from "./postSlice"
import transmissionSlice from "./transmissionSlice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({posts, profiles, transmissionSlice})

export const store = configureStore({reducer})

