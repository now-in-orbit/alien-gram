import profiles from "./profileSlice"
import posts from "./postSlice"
import transmissions from "./transmissionSlice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import auth from './auth';
import likes from './LikeSlice'
import dirtySightings from './dirtySightingSlice'
import sightings from './sightingSlice'


const reducer =  combineReducers({posts, profiles, transmissions, auth, dirtySightings, sightings, likes})


export const store = configureStore({reducer})

