import { IsNotEmpty, IsInt, IsString } from 'class-validator';
import { Marca } from 'src/marca/entities/marca.entity';

export class VeiculoRules {
  Id: number;

  @IsNotEmpty()
  marca: Marca;

  @IsNotEmpty()
  @IsInt()
  id_marca: number;

  @IsNotEmpty()
  @IsString()
  placa: string;

  @IsNotEmpty()
  @IsString()
  cor: string;
}
