import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

@Exclude()
export class CreateUserRequestDTO {
    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    email: string;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    name?: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    password: string;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    createdAt?: Date;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    updatedAt?: Date;
}
