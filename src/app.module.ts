import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VeiculosModule } from './veiculos/veiculos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaModule } from './marca/marca.module';
import { Veiculo } from './veiculos/entities/veiculo.entity';
import { Marca } from './marca/entities/marca.entity';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
import { ProprietarioModule } from './proprietario/proprietario.module';
import { Proprietario } from './proprietario/entities/proprietario.entity';
import { conn } from './db/conn';

@Module({
  imports: [VeiculosModule, TypeOrmModule.forRoot(conn), MarcaModule, UsersModule, ProprietarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
