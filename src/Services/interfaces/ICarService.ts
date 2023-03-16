import Car from '../../Domains/Car';
import ICar from '../../Interfaces/ICar';

export default interface ICarService {
  create(car: ICar): Promise<Car>;
  getAll(): Promise<Car[]>;
  getById(id: string): Promise<Car | null>;
}
