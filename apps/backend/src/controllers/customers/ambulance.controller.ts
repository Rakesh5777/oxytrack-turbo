import { createAmbulance } from "../../services/customers/ambulance.service";
import { Responses, TypedRequest, TypedResponse } from "../../types/express";

export const createAmbulanceHandler = async (req: TypedRequest["createAmbulance"], res: TypedResponse<Responses["createAmbulance"]>) => {
  const { ambulanceName, ambulanceNumber, emailAddress, description, contactIds } = req.body;
  const createdAmbulance = await createAmbulance({
    ambulanceName,
    ambulanceNumber,
    emailAddress,
    description,
    contactIds,
  });
  return res.status(201).json({ ...createdAmbulance });
};
