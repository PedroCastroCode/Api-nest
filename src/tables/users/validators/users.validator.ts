import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { Basic } from 'src/utils/basic';
import { CreateUserDto } from '../dto/create-user.dto';
import { ClassValidatorFields } from 'src/Abstractions/class-validator-fields';

export class UserRules extends Basic {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  email: string;

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
