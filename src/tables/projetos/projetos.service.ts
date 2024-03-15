import { Injectable } from '@nestjs/common';

import { IProjetoRepository } from './Repositorio/iProjeto.repository';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { Projeto } from './entities/projeto.entity';
import { UpdateProjetoDto } from './dto/update-projeto.dto';

@Injectable()
export class ProjetoService {
  constructor(private readonly projetoRepo: IProjetoRepository) {}

  async create(createProjetoDto: CreateProjetoDto) {
    const newProjeto = Projeto.create(
      createProjetoDto.nome_projeto,
      createProjetoDto.descricao,
      createProjetoDto.responsaveis,
      createProjetoDto.dtInicio,
    );
    return await this.projetoRepo.Create(newProjeto);
  }

  async findAll() {
    return await this.projetoRepo.findAll();
  }

  async findOne(id: number) {
    return await this.projetoRepo.GetById(id);
  }

  async update(id: number, updateProjetoDto: UpdateProjetoDto) {
    const newProjeto = Projeto.create(
      updateProjetoDto.nome_projeto,
      updateProjetoDto.descricao,
      updateProjetoDto.responsaveis,
      updateProjetoDto.dtInicio,
      id,
    );
    await this.projetoRepo.update(newProjeto);
    return `Projeto com id ${id} atualizado`;
  }

  async remove(id: number) {
    await this.projetoRepo.Remove(id);
    return `Projeto com id ${id} Deletado`;
  }
}
