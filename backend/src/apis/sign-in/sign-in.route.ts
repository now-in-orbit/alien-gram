import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/asyncValidator.controller';
import { signInValidator } from './sign-in.validator';
import {signInController} from "./sign-in.controller";

const { checkSchema } = require('express-validator');

export const SigninRouter = Router();

SigninRouter.route('/')
<<<<<<< HEAD
    .post(asyncValidatorController(checkSchema(signInValidator)), signInController);
=======
    .post(asyncValidatorController(checkSchema(signInValidator)), signInController);
>>>>>>> fc0aa4418b364dcd4e2225a257c083c6098b8808
