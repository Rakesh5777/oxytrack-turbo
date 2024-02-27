import express, { NextFunction, Request, Response } from 'express';
import rootRouter from './routes/routes';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import yamljs from 'yamljs';
import { specYamlPath } from '@oxytrack/tenent-contract/specYamlPath';

dotenv.config();

const app = express();
const port = 3000;
const apiVersion = 'v1';

const swaggerSpec = yamljs.load(specYamlPath);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



app.use(cors());
app.use(express.json());

app.use(`/api/${apiVersion}`, rootRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while processing your request' });
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
