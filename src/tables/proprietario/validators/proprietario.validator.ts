import { IsNotEmpty, IsString } from 'class-validator';
import { IsCPF } from 'src/utils/extraValidations/IsCPF';
import { CreateProprietarioDto } from '../dto/create-proprietario.dto';
import { Basic } from 'src/utils/basic';
import { ClassValidatorFields } from 'src/Abstractions/class-validator-fields';

export class ProprietarioRules extends Basic {
  @IsNotEmpty()
  @IsString()
  nome_completo: string;

  @IsNotEmpty()
  @IsCPF()
  cpf: string;

  @IsNotEmpty()
  telefone: string;

  constructor(data: CreateProprietarioDto) {
    super();
    Object.assign(this, data);
  }
}

export class ProprietarioValidator extends ClassValidatorFields<ProprietarioRules> {
  Validate(data: CreateProprietarioDto): boolean {
    return super.validate(new ProprietarioRules(data));
  }
}
export default class ProprietarioValidatorFactory {
  static Create() {
    return new ProprietarioValidator();
  }
}
