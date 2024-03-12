import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'; // Importe o JwtModule
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants/constants';
import { UserTypeOrmRepository } from 'src/users/Repositorio/User.repository';
import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { getDataSourceToken } from '@nestjs/typeorm';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '3d' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    {
      provide: UserTypeOrmRepository,
      useFactory: (dataSource: DataSource) =>
        new UserTypeOrmRepository(dataSource.getRepository(User)),
      inject: [getDataSourceToken()],
    },
    {
      provide: 'IUserRepository',
      useClass: UserTypeOrmRepository,
    },
    AuthService,
  ],
  exports: [AuthService],
})
export class AuthModule {}
