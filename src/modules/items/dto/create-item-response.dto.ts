import { ItemDTO } from '@app/dto';
import { Exclude } from 'class-transformer';

@Exclude()
export class CreateItemResponseDTO extends ItemDTO {}
