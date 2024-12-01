import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsOptional } from 'class-validator';

// FIXME: there are 2 user dto files
@Exclude()
export class UserDTO {
    @Expose()
    @IsDefined()
    @ApiProperty({ type: String })
    id: string;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: String })
    name: string;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    password?: string;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: Date })
    createdAt?: Date;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: Date })
    updatedAt?: Date;
}
