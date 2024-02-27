import { signInSchema } from '@oxytrack/common';
import express from 'express';
import { asyncWrapper, validateReq } from '../utils/middlewares';
import { masterSignInHandler } from '../controllers/masterUser.controller';

const masterUserRouter = express.Router();

masterUserRouter.post('/signin', validateReq(signInSchema), asyncWrapper(masterSignInHandler));

export default masterUserRouter;