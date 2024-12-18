import { EffectTypeEnum, RarityEnum, ValueTypeEnum } from '@app/enums';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

@Exclude()
export class ItemPropertyDTO {
    @Expose()
    @IsOptional()
    @ApiPropertyOptional({ type: String })
    id?: string;

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
