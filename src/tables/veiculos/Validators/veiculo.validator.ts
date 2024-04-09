import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ClassValidatorFields } from 'src/Abstractions/class-validator-fields';
import { Basic } from 'src/utils/basic';
import { CreateVeiculoDto } from '../dto/create-veiculo.dto';

export class VeiculoRules extends Basic {
  @IsNotEmpty()
  @IsNumber()
  id_marca: number;

  @IsNotEmpty()
  placa: string;

  @IsNotEmpty()
  @IsString()
  cor: string;

  @IsNotEmpty()
  @IsString()
  preco: number;

  @IsNotEmpty()
  anoFabricacao: string;

  // @IsNotEmpty()
  // @IsNumber()
  // km: number;

  constructor(data: CreateVeiculoDto) {
    super();
    Object.assign(this, data);
  }
}

export class VeiculoValidator extends ClassValidatorFields<VeiculoRules> {
  Validate(data: CreateVeiculoDto): boolean {
    return super.validate(new VeiculoRules(data));
  }
}

export default class VeiculoValidatorFactory {
  static Create() {
    return new VeiculoValidator();
  }
}
