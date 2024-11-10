import { ApiExtraModels, ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose, plainToInstance, Transform, Type } from 'class-transformer';
import { IsOptional } from 'class-validator';

import { PaginationDTO } from './pagination.dto';
import { SortDTO } from './sort.dto';

@Exclude()
@ApiExtraModels(SortDTO, PaginationDTO)
export class BaseQueryDTO {
    @Expose()
    @IsOptional()
    @Transform((data) => {
        if (typeof data.value === 'undefined') {
            return '';
        }

        return data.value;
    })
    @ApiPropertyOptional()
    search?: string;

    @Type(() => SortDTO)
    @Expose()
    @Transform((data) => {
        if (typeof data.value === 'undefined') {
            return plainToInstance(SortDTO, {});
        }

        return data.value;
    })
    @ApiPropertyOptional({ type: SortDTO })
    sort: SortDTO;

    @Type(() => PaginationDTO)
    @Expose()
    @Transform((data) => {
        if (typeof data.value === 'undefined') {
            return plainToInstance(PaginationDTO, {});
        }

        return data.value;
    })
    @ApiPropertyOptional({ type: PaginationDTO })
    pagination: PaginationDTO;
}
