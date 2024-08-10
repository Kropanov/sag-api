import { PrismaService } from '@app/libs/prisma';
import { Injectable } from '@nestjs/common';

import { CreateUserRequestDTO } from './dto/create-user-request.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
    private readonly prismaService: PrismaService;

    constructor() {
        this.prismaService = new PrismaService();
    }

    create(data: CreateUserRequestDTO) {
        return this.prismaService.user.create({ data });
    }

    findAll() {
        return this.prismaService.user.findMany();
    }

    findOne(id: number) {
        return `This action returns a #${id} user`;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(id: number, _updateUserDto: UpdateUserDto) {
        return `This action updates a #${id} user`;
    }

    remove(id: string) {
        return this.prismaService.user.delete({
            where: { id },
            select: {
                email: true,
            },
        });
    }

    removeAll() {
        return this.prismaService.user.deleteMany();
    }
}
