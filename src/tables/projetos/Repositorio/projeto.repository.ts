import { CrudRepositorio } from 'src/Abstractions/crud.repository';
import { Projeto } from '../entities/projeto.entity';
import { IProjetoRepository } from './iProjeto.repository';

export class ProjetoTypeOrmRepository
  extends CrudRepositorio<Projeto>
  implements IProjetoRepository
{
  entity: string = 'Projeto';
}
