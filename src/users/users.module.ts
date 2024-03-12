import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserTypeOrmRepository } from './Repositorio/User.repository';
import { IUserRepository } from './Repositorio/iUser.repository';
import { DataSource } from 'typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: UserTypeOrmRepository,
      useFactory: (dataSource: DataSource) =>
        new UserTypeOrmRepository(dataSource.getRepository(User)),
      inject: [getDataSourceToken()],
    },
    {
      provide: UsersService,
      useFactory: (UserRepo: IUserRepository) => new UsersService(UserRepo),
      inject: [UserTypeOrmRepository],
    },
  ],
})
export class UsersModule {}
