import {Request, Response, NextFunction} from 'express';
import {Post} from '../../utils/interfaces/Post';
import {selectAllPosts} from '../../utils/post/selectAllPosts'
import {selectPostByPostProfileId} from '../../utils/post/selectPostByPostProfileId'
import {insertPost} from '../../utils/post/insertPost'
import {updatePostByPostId} from '../../utils/post/updatePostbyPostId'
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/interfaces/Profile";


const {validationResult} = require('express-validator');

export async function getAllPostsController(request: Request, response: Response): Promise<Response | void> {

	try {
		const data = await selectAllPosts();
		// return the response
		const status: Status = {status: 200, message: null, data};
		return response.json(status);
	} catch (error) {
		console.log(error);
	}
}

export async function getPostsByPostProfileIdController(request: Request, response: Response): Promise<Response | void> {
	try {
		//todo ask instructors about argument required for selectPostByProfileId
		const data = await selectPostByPostProfileId(request.params.postProfileId);
		//return response
		const status: Status = {status: 200, message: null, data};
		return response.json(status);
	} catch (error) {
		console.log(error);
	}
}

export async function addPostController(request: Request, response: Response) {
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
}

// export async function putPostController(request: Request, response: Response) : Promise<Response>{
// 	try {
// 		const {postId} = request.params
// 		const {profileAvatarUrl, profileEmail, profileUsername} = request.body
// 		const profileIdFromSession: string = <string>request.session?.profile.profileId
//
// 		const performUpdate = async (partialProfile: PartialProfile) : Promise<Response> => {
// 			const originalPost: Post = await ()
// 		}
//
// 	}
// }
