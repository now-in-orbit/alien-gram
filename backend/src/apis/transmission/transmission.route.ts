import { Router} from "express";

//import controllers transmission

import { asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
import { transmissionValidator} from './transmission.validator'
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
const { checkSchema } = require('express-validator');

export const TransmissionRoute = Router()

//add stuff

