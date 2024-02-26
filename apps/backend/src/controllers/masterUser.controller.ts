import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { SignInModel } from '@oxytrack/common';
import { getMasterUser } from '../services/masterUser.service';

export const masterSignInHandler = async (req: Request<{}, {}, SignInModel>, res: Response) => {
    const { username, password } = req.body;
    const user = await getMasterUser(username, password);
    if (!user) return res.status(401).json({ error: 'Invalid username or password' });
    const token = jwt.sign({ ...user, role: 'master' }, process.env.JWT_SECRET!);
    return res.json({ token });
}