import {Request, Response} from 'express';

// DB

// Interfaces (represent the DB model and types of the columns associated with a specific DB table)
import {Status} from '../../utils/interfaces/Status';
import {Profile} from "../../utils/interfaces/Profile";
import {Like} from "../../utils/interfaces/Like";
import {selectLikeByLikeId} from "../../utils/like/selectLikeByLikeId";
import {deleteLike} from "../../utils/like/deleteLike";
import {insertLike} from "../../utils/like/insertLike";
import {selectLikeByLikePostId} from "../../utils/like/selectLikeByLikePostId";
import {selectLikeByLikeProfileId} from "../../utils/like/selectLikeByLikeProfileId";


export const toggleLikeController = async (request: Request, response: Response) => {

	try {
		const {likePostId} = request.body;
		// @ts-ignore
		const profile: Profile = request.session?.profile
		const likeProfileId = <string>profile.profileId

		const like: Like = {
			likeProfileId,
			likePostId,
			likeDateTime: null,
		}
		const select = await selectLikeByLikeId(like)
		// @ts-ignore
		if (select[0]) {
			const result = await deleteLike(like)
		} else {
			const result = await insertLike(like)
		}

		const status: Status = {
			status: 200,
			message: 'Like successfully updated',
			data: null
		};
		return response.json(status);

	} catch (error) {
		console.log(error);
	}
};


export const getLikeByLikeProfileIdController = async (request: Request, response: Response): Promise<Response> => {
	try {
		const {likeProfileId} = request.params;
		const mySqlResult = await selectLikeByLikeProfileId(likeProfileId)
		const data = mySqlResult ?? null
		const status: Status = {status: 200, data, message: null}
		return response.json(status)

	} catch (error) {
		return (response.json({status: 400, data: null, message: error.message}))
	}
};


export const getLikeByLikePostIdController = async (request: Request, response: Response): Promise<Response> => {
	try {
		const {likePostId} = request.params;
		const mySqlResult = await selectLikeByLikePostId(likePostId)
		const data = mySqlResult ?? null
		const status: Status = {status: 200, data, message: null}
		return response.json(status)

	} catch (error) {
		return (response.json({status: 400, data: null, message: error.message}))
	}
};