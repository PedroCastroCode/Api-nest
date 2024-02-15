import { Proprietario } from '../entities/proprietario.entity';
import { CrudRepositorio } from 'src/Abstractions/crud.repository';
import { iProprietarioRepository } from './iProprietario.repository';

export class ProprietarioTypeOrmRepository
  extends CrudRepositorio<Proprietario>
  implements iProprietarioRepository
{
  entity: string = 'Proprietario';
}
