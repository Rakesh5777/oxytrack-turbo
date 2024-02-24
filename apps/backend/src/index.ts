import express, { NextFunction, Request, Response } from 'express';
import rootRouter from './routes';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());
app.use("/api/v1", rootRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while processing your request' });
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
