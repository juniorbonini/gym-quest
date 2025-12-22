/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEmail } from 'class-validator';
export class CreateUserDTO {
  @IsString()
  @ApiProperty({ example: 'Nome do usuário' })
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  name: string;

  @IsEmail({}, { message: 'Informa um e-mail válido' })
  @ApiProperty({ example: 'example@gmail.com' })
  email: string;

  @IsNotEmpty({ message: 'sua-senha-aqui' })
  @IsString()
  password: string;
}
