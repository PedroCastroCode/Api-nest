import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDTO } from './dto/UserLoginDTO';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: UserLoginDTO) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }
}
