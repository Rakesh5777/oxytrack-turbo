import express from "express";
import masterUserRouter from "./masterUser";
import customerRouter from "./customers/customersRouter";
import { validateUser } from "../utils/middlewares";

const rootRouter = express.Router();

rootRouter.use("/masterUser", masterUserRouter);
rootRouter.use("/customer", validateUser, customerRouter);

export default rootRouter;
