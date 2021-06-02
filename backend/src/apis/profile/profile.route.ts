import { Router } from 'express'

import {check, checkSchema} from "express-validator";

export const ProfileRoute = Router();
ProfileRoute.route('/')
