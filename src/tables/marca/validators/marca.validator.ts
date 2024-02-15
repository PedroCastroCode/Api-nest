import { IsNotEmpty, IsString } from 'class-validator';
import { Basic } from 'src/utils/basic';
import { CreateMarcaDto } from '../dto/create-marca.dto';
import { ClassValidatorFields } from 'src/Abstractions/class-validator-fields';

export class MarcaRules extends Basic {
  @IsString()
  @IsNotEmpty({ message: 'Name from Marca is required' })
  nome: string;

  constructor(data: CreateMarcaDto) {
    super();
    Object.assign(this, data);
  }
}

export class MarcaValidator extends ClassValidatorFields<MarcaRules> {
  Validate(data: CreateMarcaDto): boolean {
    return super.validate(new MarcaRules(data));
  }
}

export default class MarcaValidatorFactory {
  static Create() {
    return new MarcaValidator();
  }
}
