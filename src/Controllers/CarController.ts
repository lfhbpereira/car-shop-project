import { NextFunction, Request, Response } from 'express';

import ICar from '../Interfaces/ICar';
import ICarService from '../Services/interfaces/ICarService';

export default class CarController {
  constructor(private _carService: ICarService) {}

  public create = async (req: Request, res: Response, next: NextFunction)
  : Promise<Response | void> => {
    const car: ICar = req.body;

    try {
      const newCar = await this._carService.create(car);

      return res.status(201).json(newCar);
    } catch (error) {
      next(error);
    }
  };  
}
