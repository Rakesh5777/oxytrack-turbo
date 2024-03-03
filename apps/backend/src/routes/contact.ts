import { createContactSchema } from "@oxytrack/api-contract/zodSchema";
import express from "express";
import { createContactHandler } from "../controllers/contacts.controller";
import { asyncWrapper, validateReq } from "../utils/middlewares";

const contactsRouter = express.Router();

// contactsRouter.post("", validateReq(createContactSchema), asyncWrapper(createContactHandler));
// contactsRouter.get("", asyncWrapper(getContactsHandler));

export default contactsRouter;
