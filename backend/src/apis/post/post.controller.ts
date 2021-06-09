import {Request, Response, NextFunction} from 'express';
import {Post} from '../../utils/interfaces/Post';
import {selectAllPosts} from '../../utils/post/selectAllPosts'
import {selectPostByPostProfileId} from '../../utils/post/selectPostByPostProfileId'
import {selectPostByPostId} from '../../utils/post/selectPostByPostId'
import {insertPost} from '../../utils/post/insertPost'
import {updatePostByPostId} from '../../utils/post/updatePostbyPostId'
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/interfaces/Profile";
import {selectPartialProfileByProfileId} from "../../utils/profile/selectPartialProfileByProfileId";


const {validationResult} = require('express-validator');

export const getAllPostsController = async (request: Request, response: Response): Promise<Response | void> => {

	try {
		const data = await selectAllPosts();
		// return the response
		const status: Status = {status: 200, message: null, data};
		return response.json(status);
	} catch (error) {
		console.log(error);
	}
};

export const getPostsByPostProfileIdController = async (request: Request, response: Response): Promise<Response | void> => {
	// try {
	// 	//todo ask instructors about argument required for selectPostByProfileId
	// 	const data = await selectPostByPostProfileId(request.params.postProfileId);
	// 	//return response
	// 	const status: Status = {status: 200, message: null, data};
	// 	return response.json(status);
	// } catch (error) {
	// 	console.log(error);
	// }
	try {
		const {postProfileId} = request.params;
		const mySqlResult = await selectPostByPostProfileId(postProfileId)
		const data = mySqlResult ?? null
		const status: Status = {status: 200, data, message: null}
		return response.json(status)

	} catch (error) {
		return (response.json({status: 400, data: null, message: error.message}))
	}
};

export const addPostController = async (request: Request, response: Response) => {
	try {
		const {postContent} = request.body;
		// @ts-ignore
		const postProfileId = <string>request.session?.profile.profileId;


		const post: Post = {
			postId: null,
			postProfileId,
			postContent,
			postDate: null,
			postImageUrl: null
		}
		const result = await insertPost(post)
		const status: Status = {
			status: 200,
			message: result ?? 'Post created successfully!',
			data: null
		};
		return response.json(status);
	} catch (error) {
		console.log(error);
	}
};

export const getPostsByPostIdController = async (request: Request, response: Response): Promise<Response | void> => {
	try {
		const {postId} = request.params;
		const mySqlResult = await selectPostByPostId(postId)
		const data = mySqlResult ?? null
		const status: Status = {status: 200, data, message: null}
		return response.json(status)

	} catch (error) {
		return (response.json({status: 400, data: null, message: error.message}))
	}
};


