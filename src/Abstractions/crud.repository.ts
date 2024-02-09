import { Repository, FindOptionsWhere } from 'typeorm';
import { Basic } from 'src/utils/basic';
import HttpError from 'src/utils/errors/http-errors';
import { IRepository } from 'src/utils/IRepository';

export abstract class CrudRepositorio<T extends Basic> implements IRepository<T> {
  entity: string = '';

  constructor(public repository: Repository<T>) {}

  async Create(item: T): Promise<T> {
    const data = this.repository.create(item);
    return this.repository.save(data);
  }

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async GetById(id: number): Promise<T> {
    const data = await this.repository.findOne({
      where: {
        id: id,
      } as FindOptionsWhere<T>,
      loadEagerRelations: true,
    });
    if (data) return data;
    throw new HttpError(this.entity + ' not found').NotFound();
  }

  async update(item: T): Promise<T> {
    await this.GetById(item.id);
    const newData = await this.repository.preload(item);
    await this.repository.save(newData);
    return newData;
  }

  async Remove(id: number): Promise<void> {
    await this.GetById(id);
    await this.repository.delete(id);
  }
}
