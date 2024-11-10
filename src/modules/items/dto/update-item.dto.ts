import { PartialType } from '@nestjs/mapped-types';

import { CreateItemResponseDTO } from './create-item-response.dto';

export class UpdateItemDTO extends PartialType(CreateItemResponseDTO) {}
