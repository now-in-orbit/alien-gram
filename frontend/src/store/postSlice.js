import _ from 'lodash';
import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../ui/shared/utils/httpConfig"
import {fetchProfileByProfileId, getProfileByProfileId} from './profileSlice';

// Define our reducer and action.
const postSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
        getAllPosts: (posts, action) => {
            return action.payload
        },
        getPostsByProfileId: (posts, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getAllPosts, getPostsByProfileId, getPostByPostId} = postSlice.actions

// Create an export to allow async calls to our action
export const fetchAllPosts = () => async dispatch => {
    const {data} = await httpConfig(`/apis/post/`)
    dispatch(getAllPosts(data))
}

export const fetchPostByPostProfileId = (postProfileId) => async dispatch => {
    const {data} = await httpConfig(`/apis/post/postProfileId/${postProfileId}`);
    dispatch(getPostsByProfileId(data))
}

export const fetchAllPostAndProfiles = () => async (dispatch, getState) => {
    await dispatch(fetchAllPosts())
    const profileIds = _.uniq(_.map(getState().posts, "postProfileId"));
    profileIds.forEach(profileId => dispatch(fetchProfileByProfileId(profileId)));
}

export const fetchPostByPostId = (postId) => async dispatch => {
    const {data} = await httpConfig(`/apis/post/${postId}`);
    dispatch(getPostByPostId(data))
}

// We use export default here so that if something imports this file, they will get it by default
export default postSlice.reducer
