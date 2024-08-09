import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';

@Exclude()
export class CreateUserResponseDTO {
    @Expose()
    @IsDefined()
    @ApiProperty({ type: String })
    email: string;

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
