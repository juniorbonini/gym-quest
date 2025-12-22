/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import * as bcrypt from 'bcrypt';
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { LoginDTO } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validateUser(loginDTO: LoginDTO) {
    const { email, password } = loginDTO;

    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new NotFoundException('E-mail ou senha inválidos');

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new NotFoundException('E-mail ou senha inválidos');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
    };
  }
}
