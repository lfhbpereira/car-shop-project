import AbstractODM from '../Models/AbstractODM';
import IMotorcycle from '../Interfaces/IMotorcycle';
import IMotorcycleService from './interfaces/IMotorcycleService';
import Motorcycle from '../Domains/Motorcycle';

export default class MotorcycleService implements IMotorcycleService {
  constructor(private _motorcycleModel: AbstractODM<IMotorcycle>) {}

  public async create(motorcycle: IMotorcycle): Promise<Motorcycle> {
    const { model, year, color, status, buyValue, category, engineCapacity } = motorcycle;
    const newMotorcycle = await this._motorcycleModel.create(
      { model, year, color, status: status || false, buyValue, category, engineCapacity },
    );

    return new Motorcycle(newMotorcycle);
  }

  public async getAll(): Promise<Motorcycle[]> {
    const motorcycles = await this._motorcycleModel.getAll();

    return motorcycles.map((motorcycle) => new Motorcycle(motorcycle));
  }
}
