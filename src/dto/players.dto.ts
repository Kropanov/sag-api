import { PlayerDTO } from '@app/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray } from 'class-validator';

@Exclude()
export class PlayersDTO {
    @Type(() => PlayerDTO)
    @Expose()
    @IsArray()
    @ApiProperty({ type: () => [PlayerDTO], isArray: true })
    create: PlayerDTO[];
}
