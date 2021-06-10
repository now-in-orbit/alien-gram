import profiles from "./profileSlice"
import posts from "./postSlice"
import transmissions from "./transmissionSlice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({posts, profiles, transmissions})

export const store = configureStore({reducer})

