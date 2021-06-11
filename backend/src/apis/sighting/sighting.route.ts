import { Router } from 'express';
import { getAllSightingsController, getSightingsBySightingIdController, getSightingCitiesController} from './sighting.controller'
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
const { checkSchema } = require('express-validator');

export const sightingRoute = Router();



sightingRoute.route('/sightingId/:sightingId').get(getSightingsBySightingIdController);
sightingRoute.route('/sightingCity').get(getSightingCitiesController);

sightingRoute.route('/')
	.get(getAllSightingsController)
