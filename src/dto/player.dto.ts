import { ItemsDTO } from '@app/dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsDefined, IsOptional, IsString } from 'class-validator';

@Exclude()
export class PlayerDTO {
    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    id?: string;

    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    worldId: string;

    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    userId: string;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: ItemsDTO })
    items: ItemsDTO;

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
