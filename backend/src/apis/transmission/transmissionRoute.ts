import {Router} from "express";
import {
	getAllTransmissionsController,
	getTransmissionsByTransmissionPostIdController,
	addTransmissionController, getTransmissionsByTransmissionProfileId
} from "./transmission.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {transmissionValidator} from './transmission.validator'
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

const {checkSchema} = require('express-validator');

export const transmissionRoute = Router()


transmissionRoute.route('/transmissionPostId/:transmissionPostId').get(getTransmissionsByTransmissionPostIdController)

transmissionRoute.route('/transmissionProfileId/:transmissionProfileId').get(getTransmissionsByTransmissionProfileId)

transmissionRoute.route('/')
	.get(getAllTransmissionsController)
	.post(isLoggedIn, asyncValidatorController(checkSchema(transmissionValidator)), addTransmissionController)

