import express from "express";
import masterUserRouter from "./masterUser";
import customerRouter from "./customers/customersRouter";
import contactsRouter from "./contact";

const rootRouter = express.Router();

rootRouter.use("/masterUser", masterUserRouter);
rootRouter.use("/customer", customerRouter);
rootRouter.use("/contacts", contactsRouter);

export default rootRouter;
