import { Router } from 'express';
import { getAllPostsController, getPostsByPostProfileIdController, addPostController} from './post.controller'
import { postValidator } from "./post.validator";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
const { checkSchema } = require('express-validator');

export const postRoute = Router();



postRoute.route('/postProfileId/:postProfileId').get(getPostsByPostProfileIdController);

postRoute.route('/')
	.get(getAllPostsController)
	.post(isLoggedIn, asyncValidatorController(checkSchema(postValidator)), addPostController)


