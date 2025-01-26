import { PropertiesDTO } from '@app/dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class ItemDTO {
    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    id?: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    mappingId: string;

    @Expose()
    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional({ type: Number })
    quantity?: number;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: Number })
    position: number;

    @Expose()
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    playerId: string;

    @Expose()
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    spaceshipId: string;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: () => PropertiesDTO })
    properties: PropertiesDTO;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    createdAt: Date;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    updatedAt: Date;
}
