import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserRules {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsEmail()
  email: string;
}
