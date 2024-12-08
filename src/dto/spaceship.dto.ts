import { ItemsDTO } from '@app/dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsDefined, IsOptional, IsString } from 'class-validator';

@Exclude()
export class SpaceshipDTO {
    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    id?: string;

    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    type: string;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: ItemsDTO })
    items: ItemsDTO;

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
