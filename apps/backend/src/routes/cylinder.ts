import Express from "express";
import { asyncWrapper } from "../utils/middlewares";
import { createCylinderHandler } from "../controllers/cylinder.controller";

const cylinderRouter = Express.Router();

cylinderRouter.post("", asyncWrapper("createCylinder")(createCylinderHandler));
// cylinderRouter.get("", asyncWrapper("getCylinders")(getCylindersHandler));

export default cylinderRouter;
