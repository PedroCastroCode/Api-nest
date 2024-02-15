import { User } from 'src/tables/users/entities/user.entity';

export class UpdateProprietarioDto {
  id: number;

  nome_completo: string;

  cpf: string;

  telefone: string;

  id_user: number;

  user: User;
}
