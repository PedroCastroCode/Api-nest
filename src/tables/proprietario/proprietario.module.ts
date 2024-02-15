import { Module } from '@nestjs/common';
import { ProprietarioService } from './proprietario.service';
import { ProprietarioController } from './proprietario.controller';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { Proprietario } from './entities/proprietario.entity';
import { ProprietarioTypeOrmRepository } from './Repositorio/Proprietario.repository';
import { DataSource } from 'typeorm';
import { iProprietarioRepository } from './Repositorio/iProprietario.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Proprietario])],
  controllers: [ProprietarioController],
  providers: [
    ProprietarioService,
    {
      provide: ProprietarioTypeOrmRepository,
      useFactory: (dataSource: DataSource) =>
        new ProprietarioTypeOrmRepository(dataSource.getRepository(Proprietario)),
      inject: [getDataSourceToken()],
    },
    {
      provide: ProprietarioService,
      useFactory: (proprietarioRepo: iProprietarioRepository) =>
        new ProprietarioService(proprietarioRepo),
      inject: [ProprietarioTypeOrmRepository],
    },
  ],
})
export class ProprietarioModule {}
