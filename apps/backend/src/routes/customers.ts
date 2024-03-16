import Express from "express";
import { createCustomerHandler, getCustomersHandler } from "../controllers/customer.controller";
import { asyncWrapper } from "../utils/middlewares";

const customerRouter = Express.Router();

customerRouter.post("", asyncWrapper("createCustomer")(createCustomerHandler));
customerRouter.get("", asyncWrapper("getCustomers")(getCustomersHandler));

export default customerRouter;
