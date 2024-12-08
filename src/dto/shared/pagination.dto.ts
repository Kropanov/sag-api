import { ApiPropertyOptional } from '@nestjs/swagger';
import { Exclude, Expose, Transform, Type } from 'class-transformer';

@Exclude()
export class PaginationDTO {
    @Type(() => Number)
    @Expose()
    @Transform((data) => {
        if (typeof data.value === 'undefined') {
            return 10;
        }

        return data.value;
    })
    @ApiPropertyOptional({ name: 'pagination[take]', default: 10 })
    take: number;

    @Type(() => Number)
    @Expose()
    @Transform((data) => {
        if (typeof data.value === 'undefined') {
            return 0;
        }

        return data.value;
    })
    @ApiPropertyOptional({ name: 'pagination[skip]', default: 0 })
    skip: number;
}
