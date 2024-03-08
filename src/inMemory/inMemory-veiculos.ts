import { IVeiculosRepository } from 'src/tables/veiculos/Repository/iVeiculos.repository';
import { Veiculo } from 'src/tables/veiculos/entities/veiculo.entity';
import { InMemoryRepo } from './abstract/InMemoryRepo';

export class VeiculosInMemoryRepo extends InMemoryRepo<Veiculo> implements IVeiculosRepository {}
