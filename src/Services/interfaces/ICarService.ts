import Car from '../../Domains/Car';
import ICar from '../../Interfaces/ICar';

export default interface ICarService {
  create(car: ICar): Promise<Car>;
}
