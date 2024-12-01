import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class PlanetDTO {
    @Expose()
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    type: string;

    @Expose()
    @IsNumber()
    @ApiProperty({ type: Number })
    position: number;

    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    worldId: string;
}
