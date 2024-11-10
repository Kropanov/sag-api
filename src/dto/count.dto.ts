import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';

Exclude();
export class CountDTO {
    @Expose()
    @IsDefined()
    @ApiProperty({ type: Number })
    count: number;
}
