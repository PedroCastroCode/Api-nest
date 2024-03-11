import { Basic } from 'src/utils/basic';
import { InMemoryRepo } from './abstract/InMemoryRepo';
import { Marca } from 'src/tables/marca/entities/marca.entity';
import { IMarcaRepository } from 'src/tables/marca/Repositorio/iMarca.repository';

export class MarcaInMemoryRepo extends InMemoryRepo<Marca> implements IMarcaRepository {}
