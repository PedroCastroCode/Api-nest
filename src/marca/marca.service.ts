import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';
import { IMarcaRepository } from './Repositorio/iMarca.repository';

@Injectable()
export class MarcaService {
  constructor(private readonly marcaRepo: IMarcaRepository) {}

  async create(createMarcaDto: CreateMarcaDto) {
    const newMarca = Marca.create(createMarcaDto.nome);
    console.log(newMarca);
    return await this.marcaRepo.Create(newMarca);
  }

  async findAll() {
    return await this.marcaRepo.findAll();
  }

  async findOne(id: number) {
    return await this.marcaRepo.GetById(id);
  }

  async update(id: number, updateMarcaDto: UpdateMarcaDto) {
    const newMarca = Marca.create(updateMarcaDto.nome, id);
    return await this.marcaRepo.update(newMarca);
  }

  async remove(id: number) {
    await this.marcaRepo.Remove(id);

    return `Veiculo com id ${id} Deletado`;
  }
}
