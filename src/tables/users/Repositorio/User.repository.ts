import { CrudRepositorio } from 'src/Abstractions/crud.repository';
import { User } from '../entities/user.entity';
import { IUserRepository } from './iUser.repository';

export class UserTypeOrmRepository extends CrudRepositorio<User> implements IUserRepository {
  entity: string = 'User';
}
