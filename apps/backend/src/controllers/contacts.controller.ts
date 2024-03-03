import { Request, Response } from "express";
import { createContactFn } from "../services/contacts.service";
import { Responses, TypedRequest, TypedResponse } from "../types/express";

export const createContactHandler = async (req: TypedRequest["createContact"], res: TypedResponse<Responses["createContact"]>) => {
  const { contactName, mobileNumber } = req.body;
  const contact = await createContactFn({ contactName, mobileNumber });
  return res.status(201).json({ ...contact });
};

export const getContactsHandler = async (req: Request, res: Response) => {};
