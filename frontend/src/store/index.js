import profiles from "./profileSlice"
import posts from "./postSlice"
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import auth from './auth';

const reducer =  combineReducers({posts, profiles, auth})

export const store = configureStore({reducer})

