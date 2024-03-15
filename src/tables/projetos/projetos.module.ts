import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { Projeto } from './entities/projeto.entity';
import { ProjetoService } from './projetos.service';
import { DataSource } from 'typeorm';
import { ProjetoTypeOrmRepository } from './Repositorio/projeto.repository';
import { IProjetoRepository } from './Repositorio/iProjeto.repository';
import { Module } from '@nestjs/common';
import { ProjetosController } from './projetos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Projeto])],
  controllers: [ProjetosController],
  providers: [
    ProjetoService,
    {
      provide: ProjetoTypeOrmRepository,
      useFactory: (dataSource: DataSource) =>
        new ProjetoTypeOrmRepository(dataSource.getRepository(Projeto)),
      inject: [getDataSourceToken()],
    },
    {
      provide: ProjetoService,
      useFactory: (projetoRepo: IProjetoRepository) =>
        new ProjetoService(projetoRepo),
      inject: [ProjetoTypeOrmRepository],
    },
  ],
})
export class ProjetoModule {}
