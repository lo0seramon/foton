import express from 'express';
import cors from 'cors';
import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes)

app.listen(3333, () => {
    console.log("Server Started at Port 3333!!");
});