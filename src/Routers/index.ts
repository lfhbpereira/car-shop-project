import { Router } from 'express';

import carRouter from './CarRouter';
import motorcycleRouter from './MotorcycleRouter';

const router = Router();

router.use('/cars', carRouter);
router.use('/motorcycles', motorcycleRouter);

export default router;
