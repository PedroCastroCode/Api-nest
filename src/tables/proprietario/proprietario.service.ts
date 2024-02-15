import { Injectable } from '@nestjs/common';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import { Proprietario } from './entities/proprietario.entity';
import { iProprietarioRepository } from './Repositorio/iProprietario.repository';

@Injectable()
export class ProprietarioService {
  constructor(private readonly proprietarioRepo: iProprietarioRepository) {}

  async create(createProprietarioDto: CreateProprietarioDto) {
    const newProprietario = await this.proprietarioRepo.Create(createProprietarioDto);
    return await this.proprietarioRepo.Create(newProprietario);
  }

  async findAll() {
    return await this.proprietarioRepo.findAll();
  }

  async findOne(id: number) {
    const proprietario = await this.proprietarioRepo.GetById(id);
    return proprietario;
  }

  async update(id: number, updateProprietarioDto: UpdateProprietarioDto) {
    const newProprietario = Proprietario.create(
      updateProprietarioDto.nome_completo,
      updateProprietarioDto.cpf,
      updateProprietarioDto.telefone,
      updateProprietarioDto.id_user,
      id,
    );
    await this.proprietarioRepo.update(newProprietario);
    return newProprietario;
  }

  async remove(id: number) {
    await this.proprietarioRepo.Remove(id);
    return `Proprietário ${id} removido`;
  }
}
