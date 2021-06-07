import { Router } from 'express';
import { getAllSightingsController, getSightingsBySightingIdController, addSightingController } from './sighting.controller'
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
const { checkSchema } = require('express-validator');

export const postRoute = Router();



postRoute.route('/postId/:postId').get(getSightingsBySightingIdController);

postRoute.route('/')
	.get(getAllSightingsController)
