import { Model, model, models, Schema } from 'mongoose';

export default abstract class AbstractODM<T> {
  protected schema: Schema;
  protected modelName: string;
  protected model: Model<T>;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[modelName] || model(modelName, schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create(obj);
  }
}
