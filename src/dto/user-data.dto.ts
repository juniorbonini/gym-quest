import { PaginationMetaDTO } from './pagination-meta.dto';
import { UserItemDTO } from './user-item.dto';

export class UserDataDTO {
  items: UserItemDTO;
  meta: PaginationMetaDTO;
}
