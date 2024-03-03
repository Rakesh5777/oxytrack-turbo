import express from "express";
import masterUserRouter from "./masterUser";
import customerRouter from "./customers/customersRouter";
import { validateUser } from "../utils/middlewares";
import contactsRouter from "./contact";

const rootRouter = express.Router();

rootRouter.use("/masterUser", masterUserRouter);
rootRouter.use("/customer", validateUser, customerRouter);
rootRouter.use("/contacts", validateUser, contactsRouter);

export default rootRouter;
