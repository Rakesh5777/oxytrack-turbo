import { CreateAmbulance } from '@oxytrack/tenent-contract';
import { Request, Response } from 'express';
import { createAmbulance } from '../../services/customers/ambulance.service';

export const createAmbulanceHandler = async (req: Request<{}, {}, CreateAmbulance>, res: Response) => {
    const { ambulanceName, ambulanceNumber, emailAddress, description, contactPersons } = req.body;
    const createdAmbulance = await createAmbulance({ ambulanceName, ambulanceNumber, emailAddress, description, contactPersons });
    return res.status(201).json({ message: `Ambulance created successfully`, createdAmbulance });
}