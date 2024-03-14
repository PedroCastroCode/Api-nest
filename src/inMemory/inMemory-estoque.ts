import { IEstoqueRepository } from 'src/tables/estoque/Repositorio/Estoque.repository';
import { Estoque } from 'src/tables/estoque/entities/estoque.entity';
import { InMemoryRepo } from './abstract/InMemoryRepo';

export class EstoqueInMemoryRepo
  extends InMemoryRepo<Estoque>
  implements IEstoqueRepository {}
