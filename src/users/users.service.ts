/* eslint-disable @typescript-eslint/require-await */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDTO: CreateUserDTO) {
    const user = await this.prisma.user.create({
      data: {
        name: createUserDTO.name,
        email: createUserDTO.email,
      },
    });

    return user;
  }

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async update(id: string, data: UpdateUserDTO) {
    const userCreated = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!userCreated) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  async remove(id: string) {
    const userCreated = await this.prisma.user.delete({
      where: { id },
    });
    if (!userCreated) {
      throw new NotFoundException('Usuário não encontrado');
    }
  }
}
