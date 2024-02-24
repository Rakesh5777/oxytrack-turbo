import Express from 'express';
import ambulanceRouter from './ambulance';

const customerRouter = Express.Router();

customerRouter.use('/ambulance', ambulanceRouter);

export default customerRouter;