import { Router } from 'express';
import {toggleLikeController} from "./like.controller";
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

export const likeRoute = Router();

// Every new route is instantiated below. It will include the controller name and the type of action (get, post, delete, put, patch)
likeRoute.route('/')
    .post(isLoggedIn, toggleLikeController);
