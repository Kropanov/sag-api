import { PrismaService } from '@app/libs/prisma';
import { Injectable } from '@nestjs/common';

import { CreateItemResponseDTO } from './dto/create-item-response.dto';
import { UpdateItemDto } from './dto/update-item.dto';

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

    async findAll() {
        return this.prismaService.item.findMany();
    }

    async findOne(id: number) {
        return `This action returns a #${id} item`;
    }

    async update(id: number, updateItemDto: UpdateItemDto) {
        console.log(updateItemDto);

        return `This action updates a #${id} item`;
    }

    async remove(id: number) {
        return `This action removes a #${id} item`;
    }
}
