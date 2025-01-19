import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNumber } from 'class-validator';

@Exclude()
export class PlayerPositionDTO {
    @Expose()
    @IsNumber()
    @ApiProperty({ type: Number })
    x: number;

    @Expose()
    @IsNumber()
    @ApiProperty({ type: Number })
    y: number;
}
