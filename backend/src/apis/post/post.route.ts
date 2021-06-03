import { Router } from 'express';
import { getAllPostsController, getPostsByPostProfileIdController, addPostController} from './post.controller'
import { postValidator } from "./post.validator";
const { checkSchema } = require('express-validator');

export const postRoute = Router();



postRoute.route('/postId/:postId').get(getPostsByPostProfileIdController);

postRoute.route('/')
	.get(getAllPostsController)
	.post(isLoggedIn, asyncValidatorController(checkSchema(postValidator)), addPostController)


