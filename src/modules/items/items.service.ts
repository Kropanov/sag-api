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

    async create(data: CreateItemResponseDTO) {
        return this.prismaService.item.create({
            data,
            include: {
                properties: true,
            },
        });
    }

    async createMany(data: CreateItemResponseDTO[]) {
        return this.prismaService.item.createMany({ data });
    }

    async findAll() {
        // TODO: add base-query filters
        return this.prismaService.item.findMany();
    }

    async findOne(id: string) {
        return this.prismaService.item.findUnique({ where: { id } });
    }

    async update(id: string, data: UpdateItemDTO) {
        return this.prismaService.item.update({
            where: { id },
            data,
        });
    }

    async remove(id: string) {
        return this.prismaService.item.delete({ where: { id } });
    }

    async removeAll() {
        return this.prismaService.item.deleteMany();
    }
}
