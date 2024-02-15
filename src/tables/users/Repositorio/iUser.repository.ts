import { IRepository } from 'src/utils/IRepository';
import { User } from '../entities/user.entity';

export interface IUserRepository extends IRepository<User> {}
