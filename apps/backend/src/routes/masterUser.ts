import { SignInModel, signInSchema, validate } from '@oxytrack/common';
import { PrismaClient } from '@oxytrack/database';
import express, { Request } from 'express';
import { asyncWrapper } from '../utils';

const prisma = new PrismaClient();
const masterUserRouter = express.Router();

masterUserRouter.post('/signin', validate(signInSchema), asyncWrapper(async (req: Request<{}, {}, SignInModel>, res) => {
    const { username, password } = req.body;
    const user = await prisma.masterUsers.findFirst({
        where: {
            username,
            password
        }
    });
    if (!user) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }
    res.json(user);
}
));

export default masterUserRouter;