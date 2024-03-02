import { Request, Response } from "express";
import { createAmbulance } from "../../services/customers/ambulance.service";
import { WritableAmbulance } from "@oxytrack/api-contract";

export const createAmbulanceHandler = async (
  req: Request<{}, {}, WritableAmbulance>,
  res: Response,
) => {
  const {
    ambulanceName,
    ambulanceNumber,
    emailAddress,
    description,
    contactPersonIds,
  } = req.body;
  const createdAmbulance = await createAmbulance({
    ambulanceName,
    ambulanceNumber,
    emailAddress,
    description,
    contactPersonIds,
  });
  return res
    .status(201)
    .json({ message: `Ambulance created successfully`, createdAmbulance });
};
