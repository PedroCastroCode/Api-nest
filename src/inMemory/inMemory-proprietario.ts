import { Proprietario } from 'src/tables/proprietario/entities/proprietario.entity';
import { InMemoryRepo } from './abstract/InMemoryRepo';
import { iProprietarioRepository } from 'src/tables/proprietario/Repositorio/iProprietario.repository';

export class ProprietarioInMemoryRepo
  extends InMemoryRepo<Proprietario>
  implements iProprietarioRepository {}
