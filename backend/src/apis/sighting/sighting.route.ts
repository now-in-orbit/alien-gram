import { Router } from 'express';
import {
	getAllSightingsController, getSightingsByLatController,
	getSightingsBySightingIdController,
} from './sighting.controller'
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
const { checkSchema } = require('express-validator');

export const sightingRoute = Router();

sightingRoute.route('/sightingId/:sightingId').get(getSightingsBySightingIdController);
sightingRoute.route('/sightingLatitude/:sightingLatitude').get(getSightingsByLatController);

sightingRoute.route('/')
	.get(getAllSightingsController)
