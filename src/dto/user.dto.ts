import { PlayersDTO, WorldsDTO } from '@app/dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsDefined, IsNotEmpty, IsOptional } from 'class-validator';

@Exclude()
export class UserDTO {
    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    id?: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    name: string;

    @Expose()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    password: string;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: () => WorldsDTO })
    worlds: WorldsDTO;

    @Expose()
    @IsDefined()
    @ApiProperty({ type: () => PlayersDTO })
    players: PlayersDTO;

    @Expose()
    @IsDate()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    createdAt?: Date;

    @Expose()
    @IsDate()
    @IsOptional()
    @ApiPropertyOptional({ type: Date })
    updatedAt?: Date;
}
