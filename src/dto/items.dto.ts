import { ItemDTO } from '@app/dto';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray } from 'class-validator';

@Exclude()
export class ItemsDTO {
    @Type(() => ItemDTO)
    @Expose()
    @IsArray()
    @ApiProperty({ type: () => ItemDTO, isArray: true })
    create: ItemDTO;
}
