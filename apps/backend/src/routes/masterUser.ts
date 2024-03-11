import express from "express";
import { asyncWrapper } from "../utils/middlewares";
import { masterSignInHandler, masterUserDetails } from "../controllers/masterUser.controller";

const masterUserRouter = express.Router();

masterUserRouter.post("/signIn", asyncWrapper("masterUserSignIn")(masterSignInHandler));
masterUserRouter.get("/details", asyncWrapper("masterUserDetails")(masterUserDetails));

export default masterUserRouter;
