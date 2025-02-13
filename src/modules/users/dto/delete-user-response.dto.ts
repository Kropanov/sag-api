import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';

@Exclude()
export class DeleteUserResponseDTO {
    @Expose()
    @IsDefined()
    @IsString()
    @ApiProperty({ type: String })
    name: string;
}
