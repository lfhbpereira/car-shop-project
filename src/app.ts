import express from 'express';

import router from './Routers';

const app = express();

app.use(express.json());

app.use(router);

export default app;
