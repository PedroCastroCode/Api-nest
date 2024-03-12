import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { UserTypeOrmRepository } from 'src/users/Repositorio/User.repository';
import { IUserRepository } from 'src/users/Repositorio/iUser.repository';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserTypeOrmRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.userRepository.getByUserName(username);
    if (user?.password !== pass) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
