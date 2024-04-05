import express from "express";
import masterUserRouter from "./masterUser";
import customerRouter from "./customers";
import { validateUser } from "../utils/middlewares";
import contactsRouter from "./contact";
import cylinderRouter from "./cylinder";

const rootRouter = express.Router();

rootRouter.use("/masterUser", masterUserRouter);
rootRouter.use("/customer", validateUser, customerRouter);
rootRouter.use("/contacts", validateUser, contactsRouter);
rootRouter.use("/cylinder", validateUser, cylinderRouter);

export default rootRouter;
