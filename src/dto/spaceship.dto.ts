import { ItemsDTO } from '@app/dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsOptional, IsString } from 'class-validator';

@Exclude()
export class SpaceshipDTO {
    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    id?: string;

    @Expose()
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    type?: string;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: () => ItemsDTO })
    items: ItemsDTO;

    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    worldId: string;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    createdAt: Date;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    updatedAt: Date;
}
