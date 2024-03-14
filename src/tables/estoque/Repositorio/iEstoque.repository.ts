import { Estoque } from '../entities/estoque.entity';
import { CrudRepositorio } from 'src/Abstractions/crud.repository';
import { IEstoqueRepository } from './Estoque.repository';

export class EstoqueTypeOrmRepository
  extends CrudRepositorio<Estoque>
  implements IEstoqueRepository
{
  entity: string = 'Estoque';
}
