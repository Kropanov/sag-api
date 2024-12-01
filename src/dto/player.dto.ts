import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';

@Exclude()
export class PlayerDTO {
    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    userId: string;

    @Expose()
    @IsString()
    @ApiProperty({ type: String })
    worldId: string;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: Object })
    items: object;
}
