import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Veiculo } from './entities/veiculo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VeiculosService {
  constructor(
    @InjectRepository(Veiculo)
    private veiculosRepo: Repository<Veiculo>,
  ) {}

  create(createVeiculoDto: CreateVeiculoDto) {
    return this.veiculosRepo.save(createVeiculoDto);
  }

  findAll() {
    return this.veiculosRepo.find();
  }

  findOne(id: number) {
    const veiculo = this.veiculosRepo.findOneBy({ id: id });
    if (!veiculo) throw new Error('Veículo não encontrado');
    return veiculo;
  }

  async update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
    const veiculo = await this.findOne(id);

    if (!veiculo) throw new Error('Veiculo não encontrado com esse id');

    updateVeiculoDto.id = id;
    const newVeiculo = await this.veiculosRepo.preload(updateVeiculoDto);
    return this.veiculosRepo.save(newVeiculo);
  }

  async remove(id: number) {
    const veiculo = await this.findOne(id);
    if (!veiculo) {
      return `Veiculo com ${id} não encontrado`;
    }

    await this.veiculosRepo.delete(veiculo);
    return `Veiculo ${id} removido`;
  }
}
