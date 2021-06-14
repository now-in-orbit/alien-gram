import { createSlice } from "@reduxjs/toolkit";
import { httpConfig } from "../ui/shared/utils/httpConfig"

const sightingSlice = createSlice({
	name: "sightings",
	initialState: [],
	reducers: {

		getSightingByLat: (sightings, action) => {
			return action.payload
		}
	}
})

export const {getSightingByLat} = sightingSlice.actions

export const fetchSightingsByLat = (sightingLatitude) => async dispatch => {
	const {data} = await httpConfig(`/apis/sighting/sightingLatitude/${sightingLatitude}`);
	dispatch(getSightingByLat(data))
}

export default sightingSlice.reducer