import { CrudRepositorio } from 'src/Abstractions/crud.repository';
import { User } from '../entities/user.entity';
import { IUserRepository } from './iUser.repository';

export class UserTypeOrmRepository
  extends CrudRepositorio<User>
  implements IUserRepository
{
  async getByEmail(email: string) {
    return await this.repository.findOne({ where: { email } });
  }
  entity: string = 'User';
}
