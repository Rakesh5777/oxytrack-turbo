import express, { NextFunction, Request, Response } from 'express';
import rootRouter from './routes/routes';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();

const app = express();
const port = 3000;

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API with Swagger',
            version: '1.0.0',
        },
    },
    apis: ['**/*.ts',], // path to your API files
};
const swaggerSpec = swaggerJsDoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while processing your request' });
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
