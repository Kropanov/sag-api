import { WorldDTO } from '@app/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray } from 'class-validator';

@Exclude()
export class WorldsDTO {
    @Type(() => WorldDTO)
    @Expose()
    @IsArray()
    @ApiProperty({ type: () => [WorldDTO], isArray: true })
    create: WorldDTO[];
}
