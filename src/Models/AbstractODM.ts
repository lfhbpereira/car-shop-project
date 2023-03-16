import { isValidObjectId, Model, model, models, Schema } from 'mongoose';

import HttpException from '../utils/HttpException';

export default abstract class AbstractODM<T> {
  protected schema: Schema;
  protected modelName: string;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[modelName] || model(modelName, schema);
  }

  private _validateId(id: string): void {
    if (!isValidObjectId(id)) {
      throw new HttpException(422, 'Invalid mongo id');
    }
  }

  public async create(obj: T): Promise<T> {
    return this.model.create(obj);
  }

  public async getAll(): Promise<T[]> {
    return this.model.find({});
  }

  public async getById(id: string): Promise<T | null> {
    this._validateId(id);

    return this.model.findById(id);
  }
}
