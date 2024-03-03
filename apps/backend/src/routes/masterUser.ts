import express from "express";
import { asyncWrapper } from "../utils/middlewares";
import { masterSignInHandler } from "../controllers/masterUser.controller";

const masterUserRouter = express.Router();

masterUserRouter.post("/signIn", asyncWrapper("masterUserSignIn")(masterSignInHandler));

export default masterUserRouter;
