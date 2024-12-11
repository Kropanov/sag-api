import { PlanetDTO } from '@app/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray } from 'class-validator';

@Exclude()
export class PlanetsDTO {
    @Type(() => PlanetDTO)
    @Expose()
    @IsArray()
    @ApiProperty({ type: () => [PlanetDTO], isArray: true })
    create: PlanetDTO[];
}
