import { CrudRepositorio } from 'src/Abstractions/crud.repository';
import { Veiculo } from '../entities/veiculo.entity';
import { IRepository } from 'src/utils/IRepository';

export class VeiculoTypeOrmRepository
  extends CrudRepositorio<Veiculo>
  implements IRepository<Veiculo>
{
  entity: string = 'Veiculo';
}
