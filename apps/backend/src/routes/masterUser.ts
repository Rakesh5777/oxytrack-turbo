import { signInSchema, validate } from '@oxytrack/common';
import express from 'express';

const masterUserRouter = express.Router();

masterUserRouter.post('/signin', validate(signInSchema), (req, res) => {

})

export default masterUserRouter;