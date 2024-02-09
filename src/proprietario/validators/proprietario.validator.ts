import { IsInt, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import { IsCPF } from 'src/utils/extraValidations/IsCPF';

export class Proprietario {
  @IsInt()
  id: number;

  @IsNotEmpty()
  @IsString()
  nome_completo: string;

  @IsNotEmpty()
  @IsCPF()
  cpf: string;

  @IsNotEmpty()
  telefone: string;

  @IsNotEmpty()
  user: User;

  @IsNotEmpty()
  @IsInt()
  id_user: number;
}
