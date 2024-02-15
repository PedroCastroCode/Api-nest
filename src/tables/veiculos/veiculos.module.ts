import { Module } from '@nestjs/common';
import { VeiculosService } from './veiculos.service';
import { VeiculosController } from './veiculos.controller';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { Veiculo } from './entities/veiculo.entity';
import { VeiculoTypeOrmRepository } from './Repository/Veiculos.repository';
import { DataSource } from 'typeorm';
import { IVeiculosRepository } from './Repository/iVeiculos.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Veiculo])],
  controllers: [VeiculosController],
  providers: [
    VeiculosService,
    {
      provide: VeiculoTypeOrmRepository,
      useFactory: (dataSource: DataSource) =>
        new VeiculoTypeOrmRepository(dataSource.getRepository(Veiculo)),
      inject: [getDataSourceToken()],
    },
    {
      provide: VeiculosService,
      useFactory: (veiculoRepo: IVeiculosRepository) => new VeiculosService(veiculoRepo),
      inject: [VeiculoTypeOrmRepository],
    },
  ],
})
export class VeiculosModule {}
