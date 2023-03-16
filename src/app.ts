import express from 'express';

import HandleError from './Middlewares/HandleError';
import router from './Routers';

const app = express();

app.use(express.json());

app.use(router);

app.use(HandleError.err);

export default app;
