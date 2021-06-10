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

export const fetchProfileByProfileId = (id) => async dispatch => {
    const {data} = await httpConfig(`/apis/profile/${id}`);
    dispatch(getProfileByProfileId(data))
}

export default profileSlice.reducer