import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from "../utils/httpConfig"

const profileSlice = createSlice({
    name: "profiles",
    initialState: [],
    reducers: {

        getProfileByProfileId: (profiles, action) => {
            profiles.push(action.payload)
        }
    }
})

export const {getProfileByProfileId} = profileSlice.actions

export const fetchProfileByProfileId = (profileId) => async dispatch => {
    const {data} = await httpConfig(`/apis/profile/${profileId}`);
    dispatch(getProfileByProfileId(data))
}

export default profileSlice.reducer