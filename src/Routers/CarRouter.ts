import { Router } from 'express';

import CarController from '../Controllers/CarController';
import CarModel from '../Models/CarModel';
import CarService from '../Services/CarService';

const carRouter = Router();

const carModel = new CarModel();
const carService = new CarService(carModel);
const carController = new CarController(carService);

carRouter.post('/', carController.create);

carRouter.get('/', carController.getAll);
carRouter.get('/:id', carController.getById);

export default carRouter;
