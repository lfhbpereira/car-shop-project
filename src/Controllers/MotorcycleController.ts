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

  public getAll = async (_req: Request, res: Response, next: NextFunction)
  : Promise<Response | void> => {
    try {
      const motorcycles = await this._motorcycleService.getAll();

      return res.status(200).json(motorcycles);
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction)
  : Promise<Response | void> => {
    const { id } = req.params;

    try {
      const motorcycle = await this._motorcycleService.getById(id);

      return res.status(200).json(motorcycle);
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction)
  : Promise<Response | void> => {
    const { id } = req.params;
    const motorcycle: IMotorcycle = req.body;

    try {
      const updatedMotorcycle = await this._motorcycleService.update(id, motorcycle);

      return res.status(200).json(updatedMotorcycle);
    } catch (error) {
      next(error);
    }
  };
}
