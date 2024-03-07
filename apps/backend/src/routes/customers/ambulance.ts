import Express from "express";
import { createAmbulanceHandler } from "../../controllers/customers/ambulance.controller";
import { asyncWrapper } from "../../utils/middlewares";

const ambulanceRouter = Express.Router();

ambulanceRouter.post("/", asyncWrapper("createAmbulance")(createAmbulanceHandler));

export default ambulanceRouter;
