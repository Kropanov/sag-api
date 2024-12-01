import { WorldStatusEnum } from '@app/enums';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class WorldDTO {
    @Expose()
    @IsNumber()
    @IsOptional()
    @ApiPropertyOptional({ type: Number })
    level?: number;

    @Expose()
    @IsOptional()
    @IsEnum(WorldStatusEnum)
    @ApiPropertyOptional({ type: String, default: WorldStatusEnum.ACTIVE })
    status?: WorldStatusEnum;

    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    userId: string;

    // TODO: add dtos instead of objects
    @Expose()
    @IsDefined()
    @ApiProperty({ type: Object })
    players: object;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: Object })
    planets: object;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: Object })
    spaceship: object;
}
