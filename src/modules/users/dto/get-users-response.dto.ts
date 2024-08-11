import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsDefined } from 'class-validator';

import { UserDTO } from './user.dto';

@Exclude()
export class GetUsersResponseDTO {
    @Type(() => UserDTO)
    @Expose()
    @IsDefined()
    @ApiProperty({ type: UserDTO, isArray: true })
    data: UserDTO[];
}
