import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsNumber } from 'class-validator';

@Exclude()
export class DeleteUsersResponseDTO {
    @Expose()
    @IsDefined()
    @IsNumber()
    @ApiProperty({ type: Number })
    count: number;
}
