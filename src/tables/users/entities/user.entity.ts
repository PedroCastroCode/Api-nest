import { Basic } from 'src/utils/basic';
import HttpError from 'src/utils/errors/http-errors';
import { Column, Entity } from 'typeorm';
import UserValidatorFactory from '../validators/users.validator';

@Entity('user')
export class User extends Basic {
  private constructor(username: string, password: string, email: string, id?: number) {
    super();
    this.username = username;
    this.password = password;
    this.email = email;
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

  static create(username: string, password: string, email: string, id?: number) {
    this.Validate({ username, password, email, id });
    return new User(username, password, email, id);
  }

  static Validate(CreateUserDto): void {
    const validator = UserValidatorFactory.Create();
    validator.Validate(CreateUserDto);
    if (validator.errors) {
      new HttpError({ errors: validator.errors }).BadRequest();
    }
  }
}
