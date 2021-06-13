import profiles from "./profileSlice"
import posts from "./postSlice"
import transmissions from "./transmissionSlice";
import {combineReducers, configureStore} from "@reduxjs/toolkit";
import auth from './auth';
<<<<<<< HEAD
import likes from './LikeSlice'


const reducer =  combineReducers({posts, profiles, transmissions, auth, likes})
=======
import dirtySightings from './dirtySightingSlice'
import sightings from './sightingSlice'


const reducer =  combineReducers({posts, profiles, transmissions, auth, dirtySightings, sightings})
>>>>>>> map



export const store = configureStore({reducer})

