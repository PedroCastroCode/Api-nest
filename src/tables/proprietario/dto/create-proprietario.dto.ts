import { User } from 'src/tables/users/entities/user.entity';

export class CreateProprietarioDto {
  id: number;

  nome_completo: string;

  cpf: string;

  telefone: string;

  id_user: number;

  user: User;
}
