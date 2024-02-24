import { SignInModel, signInSchema, validate } from '@oxytrack/common';
import { PrismaClient } from '@oxytrack/database';
import express, { Request } from 'express';
import jwt from 'jsonwebtoken';
import { asyncWrapper } from '../utils/middlewares';

const prisma = new PrismaClient();
const masterUserRouter = express.Router();

masterUserRouter.post('/signin', validate(signInSchema), asyncWrapper(async (req: Request<{}, {}, SignInModel>, res) => {
    const { username, password } = req.body;
    const user = await prisma.masterUsers.findFirst({ where: { username, password }, select: { id: true, username: true } });
    if (!user) return res.status(401).json({ error: 'Invalid username or password' });
    const token = jwt.sign({ ...user, role: 'master' }, process.env.JWT_SECRET!);
    return res.json({ token });
}
));

export default masterUserRouter;