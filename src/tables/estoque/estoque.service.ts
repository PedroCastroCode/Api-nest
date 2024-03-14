import { Injectable } from '@nestjs/common';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { Estoque } from './entities/estoque.entity';
import { IEstoqueRepository } from './Repositorio/Estoque.repository';

@Injectable()
export class EstoqueService {
  constructor(private readonly estoqueRepo: IEstoqueRepository) {}

  async create(createEstoqueDto: CreateEstoqueDto) {
    const newEstoque = Estoque.create(
      createEstoqueDto.item,
      createEstoqueDto.quantidade,
      createEstoqueDto.preco,
    );
    return await this.estoqueRepo.Create(newEstoque);
  }

  async findAll() {
    return await this.estoqueRepo.findAll();
  }

  async findOne(id: number) {
    return await this.estoqueRepo.GetById(id);
  }

  async update(id: number, updateEstoqueDto: UpdateEstoqueDto) {
    const newEstoque = Estoque.create(
      updateEstoqueDto.item,
      updateEstoqueDto.quantidade,
      updateEstoqueDto.preco,
      id,
    );
    await this.estoqueRepo.update(newEstoque);
    return `Estoque com id ${id} atualizado`;
  }

  async remove(id: number) {
    await this.estoqueRepo.Remove(id);
    return `Estoque com id ${id} removido`;
  }
}
