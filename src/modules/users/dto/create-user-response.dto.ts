import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsNotEmpty } from 'class-validator';

@Exclude()
export class CreateUserResponseDTO {
    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    id: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    email: string;

    @Expose()
    @IsNotEmpty()
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
