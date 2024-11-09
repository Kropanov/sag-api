import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsOptional } from 'class-validator';

@Exclude()
export class UserDTO {
    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    name?: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    email: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    password: string;
}
