import { PrismaService } from '@app/libs/prisma';
import { Injectable } from '@nestjs/common';

import { CreateItemResponseDTO } from './dto/create-item-response.dto';
import { UpdateItemDTO } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
    private prismaService: PrismaService;

    constructor() {
        this.prismaService = new PrismaService();
    }

    async create(CreateItemDTO: CreateItemResponseDTO) {
        return this.prismaService.item.create({
            data: CreateItemDTO,
            include: {
                properties: true,
            },
        });
    }

    async findAll() {
        // TODO: add base-query filters
        return this.prismaService.item.findMany();
    }

    async findOne(id: string) {
        return this.prismaService.item.findUnique({ where: { id } });
    }

    async update(id: string, updateItemDTO: UpdateItemDTO) {
        return this.prismaService.item.update({
            where: { id },
            data: updateItemDTO,
        });
    }

    async remove(id: string) {
        return this.prismaService.item.delete({ where: { id } });
    }

    async removeAll() {
        return this.prismaService.item.deleteMany();
    }
}
