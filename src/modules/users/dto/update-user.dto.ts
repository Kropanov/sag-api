import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsDefined, IsOptional } from 'class-validator';

export class UpdateUserDTO {
    @Expose()
    @IsDefined()
    @ApiProperty({ type: String })
    email: string;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    name?: string;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: String })
    password: string;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: Date })
    createdAt?: Date;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: Date })
    updatedAt?: Date;
}
