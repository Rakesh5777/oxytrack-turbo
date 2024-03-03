import { Request, Response } from "express";
import { createContactFn } from "../services/contacts.service";
import { Responses, TypedRequest, TypedResponse } from "../types/express";
import { getContactPages, getContactsCount } from "../scripts/contacts.script";

export const createContactHandler = async (req: TypedRequest["createContact"], res: TypedResponse<Responses["createContact"]>) => {
  const { contactName, mobileNumber } = req.body;
  const contact = await createContactFn({ contactName, mobileNumber });
  return res.status(201).json({ ...contact });
};

export const getContactsHandler = async (req: TypedRequest["getAllContacts"], res: TypedResponse<Responses["getAllContacts"]>) => {
  const { page, pageSize, query } = req.query;
  const contacts = await getContactPages(page, pageSize, query);
  const totalItemCount = await getContactsCount(query);
  return res.status(200).json({ items: contacts, page, pageSize, totalItemCount });
};
