import { Basic } from 'src/utils/basic';
import HttpError from 'src/utils/errors/http-errors';
import { Column, Entity } from 'typeorm';
import UserValidatorFactory from '../validators/user.validator';

@Entity('user')
export class User extends Basic {
  private constructor(
    username: string,
    password: string,
    email: string,
    cpf: string,
    id?: number,
  ) {
    super();
    this.username = username;
    this.password = password;
    this.email = email;
    this.cpf = cpf;
    if (id) {
      this.id = id;
    }
  }
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  cpf: string;

  static create(
    username: string,
    password: string,
    email: string,
    cpf: string,
    id?: number,
  ) {
    this.Validate({ username, password, email, cpf, id });
    return new User(username, password, email, cpf, id);
  }

  static Validate(createUserDto): void {
    const validator = UserValidatorFactory.Create();
    validator.Validate(createUserDto);
    if (validator.errors) {
      new HttpError({ errors: validator.errors }).BadRequest();
    }
  }
}
