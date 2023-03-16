import AbstractODM from '../Models/AbstractODM';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ICarService from './interfaces/ICarService';

export default class CarService implements ICarService {
  constructor(private _carModel: AbstractODM<ICar>) {}

  public async create(car: ICar): Promise<Car> {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = car;
    const newCar = await this._carModel.create(
      { model, year, color, status: status || false, buyValue, doorsQty, seatsQty },
    );

    return new Car(newCar);
  }

  public async getAll(): Promise<Car[]> {
    const cars = await this._carModel.getAll();

    return cars.map((car) => new Car(car));
  }
}