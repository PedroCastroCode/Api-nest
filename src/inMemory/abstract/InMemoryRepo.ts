import { throwError } from 'rxjs';
import { IRepository } from 'src/utils/IRepository';
import { Basic } from 'src/utils/basic';
import HttpError from 'src/utils/errors/http-errors';

export abstract class InMemoryRepo<T extends Basic> implements IRepository<T> {
  items: T[] = [];
  async Create(item: T): Promise<T> {
    item.id = this.items.length + 1;
    this.items.push(item);
    return item;
  }
  async update(item: T): Promise<T> {
    let foundItem = this.items.findIndex((i) => i.id === item.id);
    if (foundItem >= 0) {
      this.items[foundItem] = item;
    }
    return item;
  }

  async GetById(id: number): Promise<T> {
    const foundItem = this.items.find((i) => i.id === id);
    if (!foundItem) {
      throw new HttpError('id not found').NotFound();
    }
    return foundItem;
  }

  async findAll(): Promise<T[]> {
    return this.items;
  }

  async Remove(id: number): Promise<void> {
    let foundItem = this.items.findIndex((i) => i.id === id);
    if (foundItem >= 0) {
      this.items.splice(foundItem, 1);
    } else {
      throw new HttpError('id not found').NotFound();
    }
  }
}
