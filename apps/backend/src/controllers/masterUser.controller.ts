import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getMasterUser } from '../services/masterUser.service';
import { MasterSignInRequest } from '@oxytrack/tenent-contract';

export const masterSignInHandler = async (req: Request<{}, {}, MasterSignInRequest>, res: Response) => {
    const { username, password } = req.body;
    console.log(username, password)
    const user = await getMasterUser(username, password);
    if (!user) return res.status(401).json({ error: 'Invalid username or password' });
    const token = jwt.sign({ ...user, role: 'master' }, process.env.JWT_SECRET!);
    return res.json({ token });
}