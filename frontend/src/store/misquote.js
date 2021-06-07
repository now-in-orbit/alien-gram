import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"

// Define our reducer and action.
const misquoteSlice = createSlice({
    name: "misquote",
    initialState: [],
    reducers: {
        getAllMisquotes: (misquotes, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getAllMisquotes} = misquoteSlice.actions

// We use export default here so that if something imports this file, they will get it by default
export default misquoteSlice.reducer
