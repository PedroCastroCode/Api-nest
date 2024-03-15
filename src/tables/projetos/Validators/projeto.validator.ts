import { IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Basic } from 'src/utils/basic';
import { ClassValidatorFields } from 'src/Abstractions/class-validator-fields';
import { CreateProjetoDto } from '../dto/create-projeto.dto';

export class ProjetoRules extends Basic {
  @IsString()
  @IsNotEmpty({ message: 'Name from Projeto is required' })
  nome_projeto: string;

  @IsString()
  @IsNotEmpty({ message: 'Descricao from Projeto is required' })
  descricao: string;

  @IsString()
  @IsNotEmpty({ message: 'Responsaveis from Projeto is required' })
  responsaveis: string;

  @IsDate()
  @IsNotEmpty({ message: 'Data Inicio from Projeto is required' })
  dtInicio: Date;

  constructor(data: CreateProjetoDto) {
    super();
    Object.assign(this, data);
  }
}

export class ProjetoValidator extends ClassValidatorFields<ProjetoRules> {
  Validate(data: CreateProjetoDto): boolean {
    return super.validate(new ProjetoRules(data));
  }
}

export default class ProjetoValidatorFactory {
  static Create() {
    return new ProjetoValidator();
  }
}
