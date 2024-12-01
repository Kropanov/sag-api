import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';

@Exclude()
export class SpaceshipDTO {
    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    type: string;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: Object })
    items: object;

    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    worldId: string;
}
