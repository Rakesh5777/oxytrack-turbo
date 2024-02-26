import { signInSchema } from '@oxytrack/common';
import express from 'express';
import { asyncWrapper, validateReq } from '../utils/middlewares';
import { masterSignInHandler } from '../controllers/masterUser.controller';

const masterUserRouter = express.Router();


/**
 * @openapi
 * /signin:
 *  post:
 *     tags:
 *     - Healthcheck
 *     description: Responds if the app is up and running
 *     responses:
 *       200:
 *         description: App is up and running
 */
masterUserRouter.post('/signin', validateReq(signInSchema), asyncWrapper(masterSignInHandler));

export default masterUserRouter;