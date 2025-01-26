import { PrismaService } from '@app/libs/prisma';
import { Injectable } from '@nestjs/common';

import { CreateWorldDTO } from './dto/create-world.dto';
import { UpdateWorldDTO } from './dto/update-world.dto';

@Injectable()
export class WorldsService {
    private prismaService: PrismaService;

    constructor() {
        this.prismaService = new PrismaService();
    }

    create(data: CreateWorldDTO) {
        return this.prismaService.world.create({
            data,
            include: {
                planets: true,
                players: true,
                spaceship: true,
            },
        });
    }

    findAll() {
        return this.prismaService.world.findMany();
    }

    findOne(id: string) {
        return this.prismaService.world.findUnique({ where: { id } });
    }

    update(id: string, data: UpdateWorldDTO) {
        return this.prismaService.world.update({
            data: data,
            where: { id },
        });
    }

    remove(id: string) {
        return this.prismaService.world.delete({ where: { id } });
    }
}
