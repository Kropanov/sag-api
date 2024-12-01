import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

@Exclude()
export class CreateUserRequestDTO {
    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    name: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    password: string;
}
