import { Injectable } from '@nestjs/common';
import { CreateProprietarioDto } from './dto/create-proprietario.dto';
import { UpdateProprietarioDto } from './dto/update-proprietario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Proprietario } from './entities/proprietario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProprietarioService {
  constructor(
    @InjectRepository(Proprietario)
    private readonly proprietarioRepo: Repository<Proprietario>,
  ) {}

  create(createProprietarioDto: CreateProprietarioDto) {
    return this.proprietarioRepo.save(createProprietarioDto);
  }

  findAll() {
    return this.proprietarioRepo.find();
  }

  findOne(id: typeof Proprietario.prototype.id) {
    const proprietario = this.proprietarioRepo.findOneBy({ id: id });
    if (!proprietario) return `Proprietario com id ${id} não encontrado`;
    return proprietario;
  }

  async update(id: typeof Proprietario.prototype.id, updateProprietarioDto: UpdateProprietarioDto) {
    const proprietario = await this.proprietarioRepo.findOneBy({ id: id });

    if (!proprietario) throw new Error(`Proprietario não encontrado com esse id: ${id}`);

    updateProprietarioDto.id = id;
    const newProprietario = await this.proprietarioRepo.preload(updateProprietarioDto);
    await this.proprietarioRepo.save(newProprietario);
    return newProprietario;
  }

  async remove(id: typeof Proprietario.prototype.id) {
    const proprietario = await this.proprietarioRepo.findOneBy({ id: id });
    if (!proprietario) return `Proprietario com id ${id} não encontrado`;
    await this.proprietarioRepo.delete(proprietario);
    return `Proprietário ${proprietario.nome_completo} removido`;
  }
}
