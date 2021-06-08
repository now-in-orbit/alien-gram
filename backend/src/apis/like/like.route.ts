import { Router } from 'express';
import {getLikeByLikePostIdController, getLikeByLikeProfileIdController, toggleLikeController} from "./like.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {getPostsByPostProfileIdController} from "../post/post.controller";
import {postRoute} from "../post/post.route";

export const likeRoute = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
likeRoute.route('/')
    .post(isLoggedIn, toggleLikeController);



likeRoute.route('/likeProfileId/:likeProfileId').get(getLikeByLikeProfileIdController);

likeRoute.route('/likePostId/:likePostId').get(getLikeByLikePostIdController);
