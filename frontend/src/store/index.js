import profiles from "./profileSlice"
import posts from "./postSlice"
import transmissions from "./transmissionSlice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import auth from './auth';


const reducer =  combineReducers({posts, profiles, transmissions, auth})



export const store = configureStore({reducer})

