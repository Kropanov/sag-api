import { ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

@Exclude()
export class CreateUserRequestDTO {
    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    email: string;

    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
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
