import _ from 'lodash';
import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../ui/shared/utils/httpConfig"
import {fetchProfileByProfileId, getProfileByProfileId} from './profileSlice';

// Define our reducer and action.
const likeSlice = createSlice({
    name: "likes",
    initialState: [],
    reducers: {
        getLikeAll: (posts, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getLikeAll} = likeSlice.actions

export const fetchAllLikes = () => async dispatch => {
    const {data} = await httpConfig(`/apis/like/`)
    dispatch(getLikeAll(data))
}


// We use export default here so that if something imports this file, they will get it by default
export default likeSlice.reducer
