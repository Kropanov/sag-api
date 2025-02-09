import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

import { PlayerPositionDTO } from './player-position.dto';

@Exclude()
export class PlayerActionRequestDTO {
    @Expose()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    action: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    keyCode: string;

    @Type(() => PlayerPositionDTO)
    @Expose()
    @IsDefined()
    @ApiProperty({ type: PlayerPositionDTO })
    position: PlayerPositionDTO;
}
