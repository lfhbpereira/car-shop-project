import { NextFunction, Request, Response } from 'express';

import IMotorcycle from '../Interfaces/IMotorcycle';
import IMotorcycleService from '../Services/interfaces/IMotorcycleService';

export default class MotorcycleController {
  constructor(private _motorcycleService: IMotorcycleService) {}

  public create = async (req: Request, res: Response, next: NextFunction)
  : Promise<Response | void> => {
    const motorcycle: IMotorcycle = req.body;

    try {
      const newMotorcycle = await this._motorcycleService.create(motorcycle);

      return res.status(201).json(newMotorcycle);
    } catch (error) {
      next(error);
    }
  };
}
