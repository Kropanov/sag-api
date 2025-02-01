import { JwtAuthGuard } from '@app/guards';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody } from '@nestjs/swagger';

import { CreateItemResponseDTO } from './dto/create-item-response.dto';
import { UpdateItemDTO } from './dto/update-item.dto';
import { ItemsService } from './items.service';

@ApiBearerAuth('jwt')
@UseGuards(JwtAuthGuard)
@Controller({ path: 'items', version: '1' })
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Post()
    create(@Body() data: CreateItemResponseDTO) {
        return this.itemsService.create(data);
    }

    @Post('bulk')
    @ApiBody({ type: [CreateItemResponseDTO] })
    createMany(@Body() data: CreateItemResponseDTO[]) {
        return this.itemsService.createMany(data);
    }

    @Get()
    findAll() {
        return this.itemsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.itemsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: UpdateItemDTO) {
        return this.itemsService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.itemsService.remove(id);
    }

    @Delete()
    removeAll() {
        return this.itemsService.removeAll();
    }
}
