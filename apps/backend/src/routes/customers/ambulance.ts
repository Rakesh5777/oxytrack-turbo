import Express from "express";
import { createAmbulanceHandler } from "../../controllers/customers/ambulance.controller";
import { asyncWrapper, validateReq } from "../../utils/middlewares";
import { createAmbulanceSchema } from "@oxytrack/api-contract/zodSchema";

const ambulanceRouter = Express.Router();

ambulanceRouter.post(
  "/create",
  validateReq(createAmbulanceSchema),
  asyncWrapper(createAmbulanceHandler),
);

export default ambulanceRouter;
