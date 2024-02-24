import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";

export function asyncWrapper(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) {
    return function (req: Request, res: Response, next: NextFunction) {
        fn(req, res, next).catch(next);
    };
}

export const validateUser = (req: Request, res: Response, next: NextFunction) => {
    const authorization = req?.headers.authorization;
    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Invalid token type/ no token' });
    }
    const token = authorization.split(' ')[1];
    try {
        const { id, username, role } = jwt.verify(token, process.env.JWT_SECRET!) as { id: number, username: string, role: string };

        req.id = id;
        req.username = username;
        req.role = role;
        next();

    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
}