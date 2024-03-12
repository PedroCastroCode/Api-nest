import { Basic } from './basic';

export interface IRepository<T extends Basic> {
  Create(item: T): Promise<T>;
  update(item: T): Promise<T>;
  GetById(id: number | string): Promise<T>;
  findAll(): Promise<T[]>;
  Remove(id: number): Promise<void>;
}
