import { Request, Response } from "express";
import { createContactFn } from "../services/contacts.service";
import { WritableContact } from "@oxytrack/api-contract";

export const createContactHandler = async (req: Request<{}, {}, WritableContact>, res: Response) => {
  const { contactName, mobileNumber } = req.body;
  const contact = await createContactFn({ contactName, mobileNumber });
  return res.status(201).json({ ...contact });
};

export const getContactsHandler = async (req: Request, res: Response) => {};
