import { Module } from '@nestjs/common';
import { ProprietarioService } from './proprietario.service';
import { ProprietarioController } from './proprietario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proprietario } from './entities/proprietario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Proprietario])],
  controllers: [ProprietarioController],
  providers: [ProprietarioService],
})
export class ProprietarioModule {}
