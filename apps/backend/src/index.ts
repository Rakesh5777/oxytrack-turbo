import express from 'express';
import rootRouter from './routes';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors())
app.use(express.json());
app.use("/api/v1", rootRouter);

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
