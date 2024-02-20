import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World from the backend!');
});

app.listen(port, () => {
    console.log(`Backend listening at http://localhost:${port}`);
});
