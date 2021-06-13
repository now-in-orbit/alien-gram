import {Request, Response} from "express";
import {selectAllSightings} from "../../utils/sighting/selectAllSightings";
import {Status} from "../../utils/interfaces/Status";
import {selectSightingLatLng} from "../../utils/sighting/selectSightingCity";


export const getDirtySightingLatLngController = async (request: Request, response: Response): Promise<Response | void> => {

	try {
		const data = await selectSightingLatLng()
		// return the response
		const status: Status = {status: 200, message: null, data};
		return response.json(status);
	} catch (error) {
		console.log(error);
	}
};