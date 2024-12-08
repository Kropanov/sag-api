import { PaginationDTO } from '@app/dto/shared';

export const computePaginationState = (totalCounter: number, pagination: PaginationDTO) => {
    return {
        totalCount: totalCounter,
        currentPage: Math.trunc(pagination.skip / pagination.take) || 0,
        take: pagination.take,
    };
};
