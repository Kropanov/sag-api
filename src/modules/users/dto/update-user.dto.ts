import { PartialType } from '@nestjs/mapped-types';

import { CreateUserRequestDTO } from './create-user-request.dto';

export class UpdateUserDto extends PartialType(CreateUserRequestDTO) {}
