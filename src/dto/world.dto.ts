import { PlanetsDTO, PlayersDTO, SpaceshipDTO } from '@app/dto';
import { WorldStatusEnum } from '@app/enums';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsDefined, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class WorldDTO {
    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    id?: string;

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

    @Expose()
    @IsDefined()
    @ApiProperty({ type: () => PlayersDTO })
    players: PlayersDTO;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: () => PlanetsDTO })
    planets: PlanetsDTO;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: () => SpaceshipDTO })
    spaceship: SpaceshipDTO;

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
