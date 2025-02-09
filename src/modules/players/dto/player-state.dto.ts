import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsDefined, IsNumber } from 'class-validator';

import { PlayerPositionDTO } from './player-position.dto';

@Exclude()
export class PlayerStateDTO {
    @Type(() => PlayerPositionDTO)
    @Expose()
    @IsDefined()
    @ApiProperty({ type: PlayerPositionDTO })
    position: PlayerPositionDTO;

    @Expose()
    @IsNumber()
    @ApiProperty({ type: Number })
    health: number;
}
