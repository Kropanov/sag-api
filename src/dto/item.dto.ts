import { PropertiesDTO } from '@app/dto/properties.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@Exclude()
export class ItemDTO {
    @Expose()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    mappingId: string;

    @Expose()
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
    @ApiProperty({ type: PropertiesDTO })
    properties: PropertiesDTO;
}
