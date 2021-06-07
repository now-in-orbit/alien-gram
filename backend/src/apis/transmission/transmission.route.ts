import {Router} from "express";
import {
	getAllTransmissionsController,
	getTransmissionsByTransmissionPostIdController,
	addTransmissionController
} from "./transmission.controller";
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import {transmissionValidator} from './transmission.validator'
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";

const {checkSchema} = require('express-validator');

export const TransmissionRoute = Router()


TransmissionRoute.route('/transmissionId/:transmissionId').get(getTransmissionsByTransmissionPostIdController)

TransmissionRoute.route('/')
	.get(getAllTransmissionsController)
	.post(isLoggedIn, asyncValidatorController(checkSchema(transmissionValidator)), addTransmissionController)

