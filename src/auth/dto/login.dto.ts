/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDTO {
  @IsEmail({}, { message: 'informe um E-mail válido' })
  @ApiProperty({ example: 'example@gmail.com' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'A senha precisa ter no mínimo 8 caracteres' })
  @ApiProperty({ example: '123123123' })
  @IsNotEmpty()
  password: string;
}
