import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';

import { CreateUserRequestDTO } from './dto/create-user-request.dto';
import { CreateUserResponseDTO } from './dto/create-user-response.dto';
import { DeleteUserResponseDTO } from './dto/delete-user-response.dto';
import { DeleteUsersResponseDTO } from './dto/delete-users-response.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
@ApiTags('Users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @ApiOkResponse({ type: CreateUserResponseDTO })
    create(@Body() body: CreateUserRequestDTO) {
        const data = this.usersService.create(body);

        return plainToInstance(CreateUserResponseDTO, data);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(+id, updateUserDto);
    }

    @Delete(':id')
    @ApiOkResponse({ type: DeleteUserResponseDTO })
    remove(@Param('id') id: string) {
        return this.usersService.remove(id);
    }

    @Delete()
    @ApiOkResponse({ type: DeleteUsersResponseDTO })
    removeAll() {
        return this.usersService.removeAll();
    }
}
