import { Basic } from 'src/utils/basic';

export class CreateUserDto extends Basic {
  username: string;

  password: string;

  email: string;

  cpf: string;
}
