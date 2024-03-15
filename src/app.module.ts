import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { conn } from './db/conn';
import { VeiculosModule } from './tables/veiculos/veiculos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MarcaModule } from './tables/marca/marca.module';
import { ProprietarioModule } from './tables/proprietario/proprietario.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EstoqueModule } from './tables/estoque/estoque.module';
import { ProjetoModule } from './tables/projetos/projetos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(conn),
    VeiculosModule,
    MarcaModule,
    UsersModule,
    ProprietarioModule,
    EstoqueModule,
    AuthModule,
    ProjetoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
