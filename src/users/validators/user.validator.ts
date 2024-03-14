import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Basic } from 'src/utils/basic';
import { ClassValidatorFields } from 'src/Abstractions/class-validator-fields';
import { CreateUserDto } from '../dto/create-user.dto';
import { IsCPF } from 'src/utils/extraValidations/IsCPF';

export class UserRules extends Basic {
  @IsString()
  @IsNotEmpty({ message: 'username is required' })
  username: string;

  @IsString()
  @IsNotEmpty({ message: 'password is required' })
  password: string;

  @IsEmail()
  @IsNotEmpty({ message: 'email is required' })
  email: string;

  @IsString()
  @IsNotEmpty({ message: 'cpf is required' })
  @IsCPF()
  cpf: string;

  constructor(data: CreateUserDto) {
    super();
    Object.assign(this, data);
  }
}

export class UserValidator extends ClassValidatorFields<UserRules> {
  Validate(data: CreateUserDto): boolean {
    return super.validate(new UserRules(data));
  }
}

export default class UserValidatorFactory {
  static Create() {
    return new UserValidator();
  }
}
