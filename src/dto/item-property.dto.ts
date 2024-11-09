import { EffectTypeEnum, RarityEnum } from '@app/types';
import { ValueTypeEnum } from '@app/types/value-type.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class ItemPropertyDTO {
    @Expose()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    name: string;

    @Expose()
    @IsNumber()
    @IsNotEmpty()
    @ApiProperty({ type: Number })
    value: number;

    @Expose()
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ type: String })
    description: string;

    @Expose()
    @IsOptional()
    @IsEnum(RarityEnum)
    @ApiPropertyOptional({ type: String, default: RarityEnum.COMMON })
    rarity?: RarityEnum;

    @Expose()
    @IsOptional()
    @IsEnum(EffectTypeEnum)
    @ApiPropertyOptional({ type: String, default: EffectTypeEnum.BUFF })
    effectType?: EffectTypeEnum;

    @Expose()
    @IsOptional()
    @IsEnum(ValueTypeEnum)
    @ApiPropertyOptional({ type: String, default: ValueTypeEnum.ABSOLUTE })
    valueType?: ValueTypeEnum;

    @Expose()
    @IsString()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    itemId?: string;
}
