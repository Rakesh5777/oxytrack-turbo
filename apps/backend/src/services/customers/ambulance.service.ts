import { Request, Response } from 'express';
import { CreateAmbulanceModel } from '@oxytrack/common';

export const createAmbulance = async (req: Request<{}, {}, CreateAmbulanceModel>, res: Response) => {
    const { ambulanceName, ambulanceNumber, emailAddress, description, contactPersons } = req.body;

}