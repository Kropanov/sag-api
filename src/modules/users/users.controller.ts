import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { plainToInstance } from 'class-transformer';

import { CreateUserRequestDTO } from './dto/create-user-request.dto';
import { CreateUserResponseDTO } from './dto/create-user-response.dto';
import { DeleteUserResponseDTO } from './dto/delete-user-response.dto';
import { DeleteUsersResponseDTO } from './dto/delete-users-response.dto';
import { GetUsersResponseDTO } from './dto/get-users-response.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UserDTO } from './dto/user.dto';
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
    @ApiOkResponse({ type: GetUsersResponseDTO })
    async findAll() {
        const data = await this.usersService.findAll();

        return plainToInstance(GetUsersResponseDTO, { data });
    }

    @Get(':id')
    @ApiOkResponse({ type: UserDTO })
    async findOne(@Param('id') id: string) {
        const data = await this.usersService.findOne(id);

        return plainToInstance(UserDTO, data);
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateUserDTO) {
        const data = await this.usersService.update(id, body);

        return plainToInstance(UpdateUserDTO, data);
    }

    @Delete(':id')
    @ApiOkResponse({ type: DeleteUserResponseDTO })
    remove(@Param('id') id: string) {
        const data = this.usersService.remove(id);

        return plainToInstance(DeleteUserResponseDTO, data);
    }

    @Delete()
    @ApiOkResponse({ type: DeleteUsersResponseDTO })
    async removeAll() {
        const data = await this.usersService.removeAll();

        return plainToInstance(DeleteUsersResponseDTO, data);
    }
}
