import { ItemPropertyDTO } from '@app/dto/item-property.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose, Type } from 'class-transformer';
import { IsArray } from 'class-validator';

@Exclude()
export class PropertiesDTO {
    @Type(() => ItemPropertyDTO)
    @Expose()
    @IsArray()
    @ApiProperty({ type: ItemPropertyDTO, isArray: true })
    create: ItemPropertyDTO[];
}
