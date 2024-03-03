import express from "express";
import { asyncWrapper, validateReq } from "../utils/middlewares";
import { masterSignInHandler } from "../controllers/masterUser.controller";
import { signInSchema } from "@oxytrack/api-contract/zodSchema";

const masterUserRouter = express.Router();

masterUserRouter.post(
  "/signIn",
  validateReq(signInSchema),
  asyncWrapper(masterSignInHandler),
);

export default masterUserRouter;
