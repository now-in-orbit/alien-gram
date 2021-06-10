import _ from 'lodash';
import {createSlice} from '@reduxjs/toolkit'
import {httpConfig} from "../utils/httpConfig"
import {fetchPostByPostId, getAllPosts, getPostsByProfileId} from "./postSlice";

const transmissionSlice = createSlice({
    name: "transmissions",
    initialState: [],
    reducers: {
        getAllTransmissions: (posts, action) => {
            return action.payload
        },
        getTransmissionsByPostId: (posts, action) => {
            return action.payload
        },
    },
})

// Make our actions callable as function getAllMisquotes.
export const {getAllTransmissions, getTransmissionsByPostId} = transmissionSlice.actions

// Create an export to allow async calls to our action
export const fetchAllTransmissions = () => async dispatch => {
    const {data} = await httpConfig(`/apis/transmission/`)
    dispatch(getAllTransmissions(data))
}

export const fetchTransmissionsByTransmissionPostId = (transmissionPostId) => async dispatch => {
    const {data} = await httpConfig(`/apis/transmission/transmissionPostId/${transmissionPostId}`);
    dispatch(getTransmissionsByPostId(data))
}

export const fetchAllTransmissionsAndPosts = () => async (dispatch, getState) => {
    await dispatch(fetchAllTransmissions())
    const postIds = _.uniq(_.map(getState().transmission, "transmissionPostId"));
    postIds.forEach(postId => dispatch(fetchPostByPostId(postId)));
}

// We use export default here so that if something imports this file, they will get it by default
export default transmissionSlice.reducer
