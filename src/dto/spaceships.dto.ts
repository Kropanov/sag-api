import { SpaceshipDTO } from '@app/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';

// FIXME: rename file and class
@Exclude()
export class SpaceshipsDTO {
    @Type(() => SpaceshipDTO)
    @Expose()
    @ApiProperty({ type: () => SpaceshipDTO })
    create: SpaceshipDTO;
}
