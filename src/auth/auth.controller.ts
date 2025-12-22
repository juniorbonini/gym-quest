/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Controller, Body, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './dto/login.dto';
import { AuthResponseDTO } from './dto/auth-response.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() loginDTO: LoginDTO): Promise<AuthResponseDTO> {
    const { user, accessToken } = await this.authService.login(loginDTO);

    return {
      accessToken,
      tokenType: 'Bearer',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
