import { Module } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaController } from './marca.controller';
import { TypeOrmModule, getDataSourceName, getDataSourceToken } from '@nestjs/typeorm';
import { Marca } from './entities/marca.entity';
import { MarcaTypeOrmRepository } from './Repositorio/Marca.repository';
import { DataSource } from 'typeorm';
import { IMarcaRepository } from './Repositorio/iMarca.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Marca])],
  controllers: [MarcaController],
  providers: [
    MarcaService,
    {
      provide: MarcaTypeOrmRepository,
      useFactory: (dataSource: DataSource) =>
        new MarcaTypeOrmRepository(dataSource.getRepository(Marca)),
      inject: [getDataSourceToken()],
    },
    {
      provide: MarcaService,
      useFactory: (marcaRepo: IMarcaRepository) => new MarcaService(marcaRepo),
      inject: [MarcaTypeOrmRepository],
    },
  ],
})
export class MarcaModule {}
