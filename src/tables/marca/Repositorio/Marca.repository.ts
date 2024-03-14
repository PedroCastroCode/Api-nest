import { Marca } from '../entities/marca.entity';
import { CrudRepositorio } from 'src/Abstractions/crud.repository';
import { IMarcaRepository } from './iMarca.repository';

export class MarcaTypeOrmRepository
  extends CrudRepositorio<Marca>
  implements IMarcaRepository
{
  entity: string = 'Marca';
}
