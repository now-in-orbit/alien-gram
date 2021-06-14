import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from "../ui/shared/utils/httpConfig"

const dirtySightingSlice = createSlice({
	name: "dirtySightings",
	initialState: [],
	reducers: {

		getSightingLatLng: (sightings, action) => {
			return action.payload
		}
	}
})

export const {getSightingLatLng} = dirtySightingSlice.actions

export const fetchSightingLatLng = () => async dispatch => {
	const {data} = await httpConfig(`/apis/dirty/sightingLatLng`);
	dispatch(getSightingLatLng(data))
}

export default dirtySightingSlice.reducer