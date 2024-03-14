import { PartialType } from '@nestjs/mapped-types';
import { CreateEstoqueDto } from './create-estoque.dto';

export class UpdateEstoqueDto extends PartialType(CreateEstoqueDto) {
  id: number;
  item: string;
  quantidade: number;
  preco?: number;
}
