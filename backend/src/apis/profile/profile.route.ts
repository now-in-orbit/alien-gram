import {getProfileByProfileId, putProfileController} from "./profile.controller";
import { Router } from 'express'
import {asyncValidatorController} from "../../utils/controllers/asyncValidator.controller";
//add somemore imports

import {check, checkSchema} from "express-validator";

export const ProfileRoute = Router();
ProfileRoute.route('/')
