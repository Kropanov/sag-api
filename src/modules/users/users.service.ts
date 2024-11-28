import { PrismaService } from '@app/libs/prisma';
import { Injectable } from '@nestjs/common';

import { CreateUserRequestDTO } from './dto/create-user-request.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

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

    findOne(id: string) {
        return this.prismaService.user.findUnique({
            where: { id },
        });
    }

    findOneByName(name: string) {
        return this.prismaService.user.findUnique({
            where: {
                name: name,
            },
        });
    }

    update(id: string, data: UpdateUserDTO) {
        return this.prismaService.user.update({
            where: { id },
            data,
        });
    }

    remove(id: string) {
        return this.prismaService.user.delete({
            where: { id },
        });
    }

    removeAll() {
        return this.prismaService.user.deleteMany();
    }
}
