import { PartialType } from '@nestjs/mapped-types';
import { CreateProjetoDto } from './create-projeto.dto';

export class UpdateProjetoDto extends PartialType(CreateProjetoDto) {
  id: number;
  nome_projeto: string;
  descricao: string;
  responsaveis: string;
  dtInicio: Date;
}
