import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@Exclude()
export class LoginRequestDTO {
    @Expose()
    @IsEmail()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    email: string;

    @Expose()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    password: string;
}
