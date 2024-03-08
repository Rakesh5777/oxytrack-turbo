import { createCustomer } from "../services/customer.service";
import { Responses, TypedRequest, TypedResponse } from "../types/express";

export const createCustomerHandler = async (req: TypedRequest["createCustomer"], res: TypedResponse<Responses["createCustomer"]>) => {
  const { type, name, number, emailAddress, address, description, entityRequirement, additionalRecord, contactIds } = req.body;
  const createdCustomer = await createCustomer({
    type,
    name,
    number,
    emailAddress,
    address,
    description,
    entityRequirement,
    additionalRecord,
    contactIds,
  });
  return res.status(201).json({ ...createdCustomer });
};
