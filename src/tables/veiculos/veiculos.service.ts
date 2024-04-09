import { Injectable } from '@nestjs/common';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { Veiculo } from './entities/veiculo.entity';
import { IVeiculosRepository } from './Repository/iVeiculos.repository';

@Injectable()
export class VeiculosService {
  constructor(private readonly veiculosRepo: IVeiculosRepository) {}

  async create(createVeiculoDto: CreateVeiculoDto) {
    const newVeiculo = Veiculo.create(
      createVeiculoDto.id_marca,
      createVeiculoDto.placa,
      createVeiculoDto.cor,
      createVeiculoDto.preco,
      createVeiculoDto.anoFabricacao,
      createVeiculoDto.km,
      createVeiculoDto.id,
    );
    return await this.veiculosRepo.Create(newVeiculo);
  }

  async findAll() {
    return await this.veiculosRepo.findAll();
  }

  async findOne(id: number) {
    const veiculo = await this.veiculosRepo.GetById(id);
    return veiculo;
  }

  async update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
    const newVeiculo = Veiculo.create(
      updateVeiculoDto.id_marca,
      updateVeiculoDto.placa,
      updateVeiculoDto.cor,
      updateVeiculoDto.preco,
      updateVeiculoDto.anoFabricacao,
      updateVeiculoDto.km,
      id,
    );
    await this.veiculosRepo.update(newVeiculo);
    return newVeiculo;
  }

  async remove(id: number) {
    await this.veiculosRepo.Remove(id);
    return `veiculo ${id} removido`;
  }

  testConnection(message) {
    return message;
  }
}
