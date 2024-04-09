import { Injectable, UnauthorizedException } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { NotFoundError } from 'rxjs';
import { UserTypeOrmRepository } from 'src/users/Repositorio/User.repository';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserTypeOrmRepository,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.userRepository.getByEmail(email);
    const message: string = 'Credenciais inválidas';
    if (!user || !(await compare(pass, user.password))) {
      throw new NotFoundError(message);
    }
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
