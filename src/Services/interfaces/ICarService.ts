import Car from '../../Domains/Car';
import ICar from '../../Interfaces/ICar';

export default interface ICarService {
  create(car: ICar): Promise<Car>;
  getAll(): Promise<Car[]>;
  getById(id: string): Promise<Car | null>;
  update(id: string, car: ICar): Promise<Car | null>;
}
