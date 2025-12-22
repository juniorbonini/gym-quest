/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller, Body, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './dto/login.dto';
import { AuthResponseDTO } from './dto/auth-response.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  @Post('login')
  login(@Body() loginDTO: LoginDTO): AuthResponseDTO {
    return {} as AuthResponseDTO;
  }
}
