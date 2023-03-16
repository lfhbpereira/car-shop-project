import AbstractODM from '../Models/AbstractODM';
import Car from '../Domains/Car';
import HttpException from '../utils/HttpException';
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

  public async getById(id: string): Promise<Car | null> {
    const car = await this._carModel.getById(id);

    if (!car) {
      throw new HttpException(404, 'Car not found');
    }

    return new Car(car);
  }
}
