import express from "express";
import { createContactHandler } from "../controllers/contacts.controller";
import { asyncWrapper } from "../utils/middlewares";

const contactsRouter = express.Router();

contactsRouter.post("", asyncWrapper("createContact")(createContactHandler));

export default contactsRouter;
