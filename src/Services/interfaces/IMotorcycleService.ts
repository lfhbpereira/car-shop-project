import IMotorcycle from '../../Interfaces/IMotorcycle';
import Motorcycle from '../../Domains/Motorcycle';

export default interface IMotorcycleService {
  create(motorcycle: IMotorcycle): Promise<Motorcycle>;
  getAll(): Promise<Motorcycle[]>;
  getById(id: string): Promise<Motorcycle | null>;
}
