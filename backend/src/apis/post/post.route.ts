import { Router } from 'express';
import { getAllPostsController, getPostsByPostProfileIdController, addPostController} from './post.controller'



export const postRoute = Router();



postRoute.route('/postId/:postId').get(getPostsByPostProfileIdController);

postRoute.route('/')
	.get(getAllPostsController)











