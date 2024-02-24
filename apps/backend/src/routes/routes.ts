import express from 'express';
import masterUserRouter from './masterUser';
import customerRouter from './customers/customersRouter';

const rootRouter = express.Router();

rootRouter.use("/masterUser", masterUserRouter);
rootRouter.use("/customer", customerRouter);



export default rootRouter;