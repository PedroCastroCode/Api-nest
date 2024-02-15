import { User } from 'src/tables/users/entities/user.entity';
import UserValidatorFactory from 'src/tables/users/validators/users.validator';
import { Basic } from 'src/utils/basic';
import HttpError from 'src/utils/errors/http-errors';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

@Entity('proprietario')
export class Proprietario extends Basic {
  private constructor(
    nome_completo: string,
    cpf: string,
    telefone: string,
    id_user: number,
    id?: number,
  ) {
    super();
    this.nome_completo = nome_completo;
    this.cpf = cpf;
    this.telefone = telefone;
    this.id_user = id_user;
    if (id) {
      this.id = id;
    }
  }

  @Column()
  nome_completo: string;

  @Column()
  cpf: string;

  @Column()
  telefone: string;

  @OneToOne(() => User)
  @JoinColumn({ name: 'id_user' })
  user: User;
  @Column()
  id_user: number;

  static create(
    nome_completo: string,
    cpf: string,
    telefone: string,
    id_user: number,
    id?: number,
  ) {
    this.Validate({ nome_completo, cpf, telefone, id_user });
    return new Proprietario(nome_completo, cpf, telefone, id_user);
  }

  static Validate(CreateProprietarioDto): void {
    const validator = UserValidatorFactory.Create();
    validator.Validate(CreateProprietarioDto);
    if (validator.errors) {
      new HttpError({ errors: validator.errors }).BadRequest();
    }
  }
}
