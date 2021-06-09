import misquotes from "./misquote"
import {combineReducers, configureStore} from "@reduxjs/toolkit";

const reducer =  combineReducers({misquotes})

export const store = configureStore({reducer})
