import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { conn } from './db/conn';
import { VeiculosModule } from './tables/veiculos/veiculos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaModule } from './tables/marca/marca.module';
import { UserModule } from './tables/users/users.module';
import { ProprietarioModule } from './tables/proprietario/proprietario.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(conn),
    VeiculosModule,
    MarcaModule,
    UserModule,
    ProprietarioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
