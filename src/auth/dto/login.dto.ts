/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class LoginDTO {
  @IsEmail({}, { message: 'example@gmail.com' })
  email: string;

  @IsString()
  @MinLength(8, { message: 'A senha precisa ter no mínimo 8 caracteres' })
  @IsNotEmpty()
  password: string;
}
