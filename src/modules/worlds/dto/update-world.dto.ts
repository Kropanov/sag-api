import { PartialType } from '@nestjs/mapped-types';

import { CreateWorldDTO } from './create-world.dto';

export class UpdateWorldDTO extends PartialType(CreateWorldDTO) {}
