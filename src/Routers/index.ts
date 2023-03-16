import { Router } from 'express';

import carRouter from './CarRouter';

const router = Router();

router.use('/cars', carRouter);

export default router;
