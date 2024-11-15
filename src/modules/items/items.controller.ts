import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

import { CreateItemResponseDTO } from './dto/create-item-response.dto';
import { UpdateItemDTO } from './dto/update-item.dto';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}

    @Post()
    create(@Body() createItemDTO: CreateItemResponseDTO) {
        return this.itemsService.create(createItemDTO);
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
    update(@Param('id') id: string, @Body() updateItemDTO: UpdateItemDTO) {
        return this.itemsService.update(id, updateItemDTO);
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
