import { Router } from 'express';

import MotorcycleController from '../Controllers/MotorcycleController';
import MotorcycleModel from '../Models/MotorcycleModel';
import MotorcycleService from '../Services/MotorcycleService';

const motorcycleRouter = Router();

const motorcycleModel = new MotorcycleModel();
const motorcycleService = new MotorcycleService(motorcycleModel);
const motorcycleController = new MotorcycleController(motorcycleService);

motorcycleRouter.post('/', motorcycleController.create);

motorcycleRouter.get('/', motorcycleController.getAll);
motorcycleRouter.get('/:id', motorcycleController.getById);

motorcycleRouter.put('/:id', motorcycleController.update);

export default motorcycleRouter;
