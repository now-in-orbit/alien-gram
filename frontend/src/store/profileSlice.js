import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from "../ui/shared/utils/httpConfig"
import {fetchAuth} from "./auth";

const profileSlice = createSlice({
    name: "profiles",
    initialState: [],
    reducers: {

        getProfileByProfileId: (profiles, action) => {
            profiles.push(action.payload)
        },
        getProfileUpdate: (profiles, action) => {
            profiles.push(action.payload)
        }
    }
})

export const {getProfileByProfileId, getProfileUpdate} = profileSlice.actions

export const fetchProfileByProfileId = (profileId) => async dispatch => {
    const {data} = await httpConfig(`/apis/profile/${profileId}`);
    dispatch(getProfileByProfileId(data))
}

export const fetchProfileUpdateByProfile = () => async (dispatch, getState) => {
    await dispatch(fetchAuth())
    const {auth} = getState()
    console.log(auth)
    if(auth !== null) {
        const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
        console.log(data)
        dispatch(getProfileUpdate(data))
    }
}

export default profileSlice.reducer