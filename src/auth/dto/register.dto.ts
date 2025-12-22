/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterDTO {
  @IsNotEmpty()
  @ApiProperty({ example: 'example@gmail.com' })
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'Nome do usuário' })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: 'sua-senha-aqui' })
  password: string;
}
