import { PlanetsDTO, PlayersDTO } from '@app/dto';
import { SpaceshipsDTO } from '@app/dto/spaceships.dto';
import { WorldStatusEnum } from '@app/enums';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsEnum, IsNumber, IsOptional } from 'class-validator';

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
    @IsOptional()
    @ApiPropertyOptional({ type: String })
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
    @ApiProperty({ type: () => SpaceshipsDTO })
    spaceship: SpaceshipsDTO;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    createdAt: Date;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    updatedAt: Date;
}
