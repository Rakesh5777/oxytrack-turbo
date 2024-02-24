import express from 'express';
import masterUserRouter from './masterUser';

const rootRouter = express.Router();

rootRouter.use("/masterUser", masterUserRouter);


export default rootRouter;