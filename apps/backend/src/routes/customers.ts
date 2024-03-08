import Express from "express";
import { createCustomerHandler } from "../controllers/customer.controller";
import { asyncWrapper } from "../utils/middlewares";

const customerRouter = Express.Router();

customerRouter.post("", asyncWrapper("createCustomer")(createCustomerHandler));

export default customerRouter;
