import express from 'express';
import cors from 'cors';
import routes from './routes'

const app = express();

//Allow other sites from different addresses to communicate with this server
app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(3333);
