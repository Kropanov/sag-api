import { ApiPropertyOptional } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { Exclude, Expose, Transform } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';

@Exclude()
export class SortDTO {
    @Expose()
    @Transform((data) => {
        if (typeof data.value === 'undefined') {
            return 'createdAt';
        }

        return data.value;
    })
    @ApiPropertyOptional({ name: 'sort[field]', default: 'createdAt' })
    field: string;

    @Expose()
    @IsEnum(Prisma.SortOrder)
    @IsOptional()
    @Transform((data) => {
        if (typeof data.value === 'undefined') {
            return 'desc';
        }

        return data.value;
    })
    @ApiPropertyOptional({ name: 'sort[order]', enum: Prisma.SortOrder, default: 'desc' })
    order: Prisma.SortOrder;
}
