import { Request, Response } from "express";
import { createContactFn } from "../services/contacts.service";
import { TypedRequest } from "../types/express";

export const createContactHandler = async (req: TypedRequest["createContact"], res: Response) => {
  const { contactName, mobileNumber } = req.body;
  const contact = await createContactFn({ contactName, mobileNumber });
  return res.status(201).json({ ...contact });
};

export const getContactsHandler = async (req: Request, res: Response) => {};
