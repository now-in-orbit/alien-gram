import {Request, Response, NextFunction} from 'express';
import {Sighting} from '../../utils/interfaces/Sighting';
import {selectAllSightings} from '../../utils/sighting/selectAllSightings';
import {selectSightingBySightingId} from "../../utils/sighting/selectSightingBySightingId";
import {insertSighting} from '../../utils/sighting/insertSighting';
import {Status} from '../../utils/interfaces/Status';
import {selectPostByPostProfileId} from "../../utils/post/selectPostByPostProfileId";
import {Post} from "../../utils/interfaces/Post";
import {insertPost} from "../../utils/post/insertPost";
import {selectSightingByLat} from "../../utils/sighting/selectSightingByLat";

export const getAllSightingsController = async (request: Request, response: Response): Promise<Response | void> => {
	try {
		const data = await selectAllSightings();
		//return the response
		const status: Status = {status: 200, message: null, data};
		return response.json(status);
	} catch (error) {
		console.log(error)
	}

};

export const getSightingsBySightingIdController = async (request: Request, response: Response): Promise<Response | void> => {
	try {
		const data = await selectSightingBySightingId(request.params.sightingId);
		//return response
		const status: Status = {status: 200, message: null, data};
		return response.json(status);
	} catch (error) {
		console.log(error);
	}
};

export const getSightingsByLatController = async (request: Request, response: Response): Promise<Response | void> => {
	try {
		const data = await selectSightingByLat(request.params.sightingLatitude);
		//return the response
		const status: Status = {status: 200, message: null, data};
		return response.json(status);
	} catch (error) {
		console.log(error)
	}

};
