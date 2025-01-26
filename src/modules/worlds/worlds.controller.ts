import { JwtAuthGuard } from '@app/guards/jwt-auth.guard';
import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';

import { CreateWorldDTO } from './dto/create-world.dto';
import { UpdateWorldDTO } from './dto/update-world.dto';
import { WorldsService } from './worlds.service';

@ApiBearerAuth('jwt')
@UseGuards(JwtAuthGuard)
@Controller({ path: 'worlds', version: '1' })
export class WorldsController {
    constructor(private readonly worldsService: WorldsService) {}

    @Post()
    create(@Body() body: CreateWorldDTO) {
        return this.worldsService.create(body);
    }

    @Get()
    findAll() {
        return this.worldsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.worldsService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body: UpdateWorldDTO) {
        return this.worldsService.update(id, body);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.worldsService.remove(id);
    }
}
