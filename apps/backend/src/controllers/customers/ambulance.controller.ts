import { Request, Response } from "express";
import { createAmbulance } from "../../services/customers/ambulance.service";
import { Ambulance, WritableAmbulance } from "@oxytrack/api-contract";

export const createAmbulanceHandler = async (
  req: Request<{}, {}, WritableAmbulance>,
  res: Response<Ambulance>,
) => {
  const {
    ambulanceName,
    ambulanceNumber,
    emailAddress,
    description,
    contactIds,
  } = req.body;
  const createdAmbulance = await createAmbulance({
    ambulanceName,
    ambulanceNumber,
    emailAddress,
    description,
    contactIds,
  });
  return res.status(201).json({ ...createdAmbulance });
};
