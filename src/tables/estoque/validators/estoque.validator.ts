import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CreateEstoqueDto } from '../dto/create-estoque.dto';
import { ClassValidatorFields } from 'src/Abstractions/class-validator-fields';
import { Basic } from 'src/utils/basic';

export class EstoqueRules extends Basic {
  @IsString()
  @IsNotEmpty({ message: 'item from estoque is required' })
  item: string;

  @IsNumber()
  @IsNotEmpty({ message: 'quantidade from estoque is required' })
  quantidade: string;

  constructor(data: CreateEstoqueDto) {
    super();
    Object.assign(this, data);
  }
}

export class EstoqueValidator extends ClassValidatorFields<EstoqueRules> {
  Validate(data: CreateEstoqueDto): boolean {
    return super.validate(new EstoqueRules(data));
  }
}

export default class EstoqueValidatorFactory {
  static Create() {
    return new EstoqueValidator();
  }
}
