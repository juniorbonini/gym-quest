/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { PaginationQueryDTO } from './dto/pagination.querty.dto';

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

  async findAllPaginated({ page, limit }: PaginationQueryDTO) {
    const skip = (page - 1) * limit;

    const [items, total] = await this.prisma.user
      .findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      })
      .then(async (users) => {
        const total = await this.prisma.user.count();
        return [users, total];
      });

    const totalPages = Math.ceil(Number(total) / Number(limit));

    return {
      items,
      meta: {
        page,
        limit,
        total,
        totalPages,
        hasNext: page < totalPages,
        hasPrevious: page > 1,
      },
    };
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
