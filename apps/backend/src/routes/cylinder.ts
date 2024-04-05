import Express from "express";
import { asyncWrapper } from "../utils/middlewares";
import { createCylinderHandler, getCylindersHandler } from "../controllers/cylinder.controller";

const cylinderRouter = Express.Router();

cylinderRouter.post("", asyncWrapper("createCylinder")(createCylinderHandler));
cylinderRouter.get("", asyncWrapper("getAllCylinders")(getCylindersHandler));

export default cylinderRouter;
