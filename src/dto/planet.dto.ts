import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class PlanetDTO {
    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    id?: string;

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

    @Expose()
    @IsDate()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    createdAt?: Date;

    @Expose()
    @IsDate()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    updatedAt?: Date;
}
