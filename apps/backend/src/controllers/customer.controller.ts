import { createCustomer, getCustomers } from "../services/customer.service";
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

export const getCustomersHandler = async (req: TypedRequest["getCustomers"], res: TypedResponse<Responses["getCustomers"]>) => {
  const { page, pageSize, query } = req.query;
  const customers = await getCustomers(page, pageSize, query);
  return res.status(200).json(customers);
};
