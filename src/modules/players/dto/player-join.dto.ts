import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';

import { PlayerStateDTO } from './player-state.dto';

@Exclude()
export class PlayerJoinDTO {
    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    userId: string;

    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    username: string;

    @Type(() => PlayerStateDTO)
    @Expose()
    @IsDefined()
    @ApiProperty({ type: PlayerStateDTO })
    state: PlayerStateDTO;
}
