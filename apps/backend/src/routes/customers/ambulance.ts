import Express from 'express';
import { validateUser } from '../../utils/middlewares';

const ambulanceRouter = Express.Router();

ambulanceRouter.get('/check', validateUser, (req, res) => {
    res.json({ username: req.username, id: req.id });
});

export default ambulanceRouter;