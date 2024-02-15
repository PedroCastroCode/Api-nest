import { Module } from '@nestjs/common';
import { TypeOrmModule, getDataSourceToken } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UserTypeOrmRepository } from './Repositorio/User.repository';
import { IUserRepository } from './Repositorio/iUser.repository';

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
      useFactory: (userRepo: IUserRepository) => new UsersService(userRepo),
      inject: [UserTypeOrmRepository],
    },
  ],
})
export class UserModule {}
