import { IRepository } from 'src/utils/IRepository';
import { Estoque } from '../entities/estoque.entity';

export interface IEstoqueRepository extends IRepository<Estoque> {}
