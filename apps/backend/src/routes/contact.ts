import express from "express";
import { createContactHandler } from "../controllers/contacts.controller";
import { asyncWrapper } from "../utils/middlewares";

const contactsRouter = express.Router();

contactsRouter.post("", asyncWrapper(createContactHandler));
// contactsRouter.get("", asyncWrapper(getContactsHandler));

export default contactsRouter;
