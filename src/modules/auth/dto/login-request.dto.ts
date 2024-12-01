import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class LoginRequestDTO {
    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    name: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    password: string;
}
