import { Module } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { Estoque } from './entities/estoque.entity';
import { EstoqueTypeOrmRepository } from './Repositorio/iEstoque.repository';
import { DataSource } from 'typeorm';
import { IEstoqueRepository } from './Repositorio/Estoque.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Estoque])],
  controllers: [EstoqueController],
  providers: [
    EstoqueService,
    {
      provide: EstoqueTypeOrmRepository,
      useFactory: (dataSource: DataSource) =>
        new EstoqueTypeOrmRepository(dataSource.getRepository(Estoque)),
      inject: [getDataSourceToken()],
    },
    {
      provide: EstoqueService,
      useFactory: (estoqueRepo: IEstoqueRepository) =>
        new EstoqueService(estoqueRepo),
      inject: [EstoqueTypeOrmRepository],
    },
  ],
})
export class EstoqueModule {}
