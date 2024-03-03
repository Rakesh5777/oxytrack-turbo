import express from "express";
import { createContactHandler, getContactsHandler } from "../controllers/contacts.controller";
import { asyncWrapper } from "../utils/middlewares";

const contactsRouter = express.Router();

contactsRouter.post("", asyncWrapper("createContact")(createContactHandler));
contactsRouter.get("", asyncWrapper("getAllContacts")(getContactsHandler));

export default contactsRouter;
